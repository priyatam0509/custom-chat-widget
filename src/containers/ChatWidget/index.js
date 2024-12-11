/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0 */

import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import { useAppConfig } from '../../providers/AppConfigProvider';
import { device, chatWithFormStates, chatWidgetDefaults, chatParties, loggerNames } from '../../constants';
import { ChatContainer, ChatWrapper } from './styled';
import { genLogger } from "../../lib/logger";
import { AiOutlineClose } from "react-icons/ai";

const name = loggerNames.containers.CHAT_WIDGET;
const { log, error, trace, info } = genLogger(name);

const ChatWidget = ({
    dataFromInputForm = {},
    setCurrentState = () => log('No Function'),
    setWidgetIsOpen,
    widgetIsOpen
}) => {
    log(">>> Init");
    const [loading, setLoading] = useState(true);
    const [chatInitialized, setChatInitialized] = useState(false);
    const [toggleToForm, setToggleToForm] = useState(false);
    const [isBotTyping, setIsBotTyping] = useState(false);
    const { primaryColor, description, region, apiGateway, contactFlowId, instanceId, enableAttachments } = useAppConfig();
    if (Object.keys(dataFromInputForm).length !== 0) log('dataFromInputForm: ', dataFromInputForm);

    const initialProperties = useAppConfig();

    window.connect.ChatEvents &&
    window.connect.ChatEvents.onAgentEndChat(() => {
        setChatInitialized(false);
        setCurrentState(chatWithFormStates.FORM); // Redirect to login form
    });

    window.connect.ChatEvents &&
    window.connect.ChatEvents.onChatEnded(() => {
        setChatInitialized(false);
        setCurrentState(chatWithFormStates.FORM); // Redirect to login form
    });


   /* window.connect.ChatEvents &&
    window.connect.ChatEvents.onAgentEndChat(() => {
        setChatInitialized(false);
    });

    window.connect.ChatEvents &&
        window.connect.ChatEvents.onChatEnded(() => {
        setChatInitialized(false);
    });
    */

    /*const successHandler = (chatSession) => {
        info("successHandler");
        setLoading(false);

        chatSession.incomingItemDecorator = function (item) {
            if ([chatParties.SYSTEM_MESSAGE].indexOf(item.displayName) !== -1) {
                item.displayName = "Criteria";
            }

            if ([chatParties.BOT].indexOf(item.displayName) !== -1) {
                item.displayName = "Criteria";
            }

            // Apply custom color styling to incoming user messages
            if (item.displayName === chatParties.USER) {
                item.className = 'incoming-user-message'; // Add the class to user incoming messages
            }

            return item;
        };

        chatSession.onIncoming(function (data) {
            trace("incoming message:|| " + JSON.stringify(data));
        });

        chatSession.onOutgoing(function (data) {
            trace("outgoing message:|| " + JSON.stringify(data));
        });

        /*chatSession.onChatDisconnected(function (data) {
            info("Chat has been disconnected");
            trace(data);
            if (Object.keys(dataFromInputForm).length !== 0) setToggleToForm(true);
        });*/
        /*chatSession.onChatDisconnected(function (data) {
            info("Chat has been disconnected");
            trace(data);
        
            setChatInitialized(false); // Reset chat initialization state
            setCurrentState(chatWithFormStates.FORM); // Redirect to the login form
        
            if (Object.keys(dataFromInputForm).length !== 0) {
                setToggleToForm(true);
            }
        });
        
    };*/

    const successHandler = (chatSession) => {
        info("successHandler");
        // setLoading(false);
    
        chatSession.incomingItemDecorator = function (item) {
            if ([chatParties.SYSTEM_MESSAGE].indexOf(item.displayName) !== -1) {
                item.displayName = "Criteria";
            }
    
            if ([chatParties.BOT].indexOf(item.displayName) !== -1) {
                item.displayName = "Criteria";
            }
    
            if (item.displayName === chatParties.USER) {
                item.className = 'incoming-user-message'; // Add the class to user incoming messages
            }
    
            return item;
        };
    
        // Show the loader when the bot starts responding
        chatSession.onOutgoing(function (data) {
            trace("outgoing message:|| " + JSON.stringify(data));
            setIsBotTyping(true); // Show loader while waiting for bot response
        });
    
        // Hide the loader when the bot's response arrives
        chatSession.onIncoming(function (data) {
            trace("incoming message:|| " + JSON.stringify(data));
            setIsBotTyping(false); // Hide loader
        });
    
        chatSession.onChatDisconnected(function (data) {
            info("Chat has been disconnected");
            trace(data);
    
            setChatInitialized(false); // Reset chat initialization state
            setCurrentState(chatWithFormStates.FORM); // Redirect to the login form
    
            if (Object.keys(dataFromInputForm).length !== 0) {
                setToggleToForm(true);
            }
        });
    };
    

    const handleChatIconClick = () => {
        if (!chatInitialized) {
            setCurrentState(chatWithFormStates.FORM); // Show the login form
            setWidgetIsOpen(false);
        } else {
            setWidgetIsOpen(true); // Open active chat
        }
    };
    

    const failureHandler = (e) => {
        // chat failed
        error("failed", e);
    };

    const getReferredData = (referralString, sourceData) => {
        log('getReferredData');
        log('referralString', referralString);
        log('sourceData', sourceData);
        let data = '';
        let [operator, whereToRefer, dataToRefer] = referralString.split("|");
        log('dataToRefer', dataToRefer);
        if (dataToRefer && sourceData.hasOwnProperty(dataToRefer)) {
            data = sourceData[dataToRefer];
        }
        if (dataToRefer && !sourceData.hasOwnProperty(dataToRefer)) {
            error(`Unable to find ${dataToRefer} in source data ${sourceData}`);
        }
        log('return data', data);
        return data;
    };

    const getNameAndUserName = (formData = {}, initialPropertiesName = '', initialPropertiesUsername = '') => {
        log('Inside getNameAndUserName');
        let name = chatWidgetDefaults.NAME;
        let username = chatWidgetDefaults.USER_NAME;

        if (Object.keys(formData).length !== 0) {
            log(`formData`, formData);
            if (initialPropertiesName && initialPropertiesName.includes(chatWidgetDefaults.REFER_INDICATOR)) {
                name = getReferredData(initialPropertiesName, formData);
            }
            if (initialPropertiesUsername && initialPropertiesUsername.includes(chatWidgetDefaults.REFER_INDICATOR)) {
                username = getReferredData(initialPropertiesUsername, formData);
            }
        }

        if (Object.keys(formData).length === 0) {
            name = initialPropertiesName ? initialPropertiesName : chatWidgetDefaults.NAME;
            username = initialPropertiesUsername ? initialPropertiesUsername : chatWidgetDefaults.USER_NAME;
        }

        if (name.includes(chatWidgetDefaults.REFER_INDICATOR)) {
            error(`name field has value ${initialPropertiesName} which is not referenced correctly`);
            name = chatWidgetDefaults.NAME;
        }
        if (username.includes(chatWidgetDefaults.REFER_INDICATOR)) {
            error(`username field has value ${initialPropertiesUsername} which is not referenced correctly`);
            username = chatWidgetDefaults.USER_NAME;
        }

        return { name, username };
    };

    const getContactAttrsForContactFlow = (name = '', username = '', dataFromInputForm = {}, initialPropertiesContAttrs, initialPropertiesName, initialPropertiesUsername) => {
        log('>>> Inside getContactAttrsForContactFlow');
        let attrs = {};
        attrs.customerName = (!initialPropertiesName.includes(chatWidgetDefaults.REFER_INDICATOR)) ? name : chatWidgetDefaults.CUSTOMER_NAME;
        if (!initialPropertiesUsername.includes(chatWidgetDefaults.REFER_INDICATOR)) {
            attrs.username = username;
        }
        if (dataFromInputForm) {
            log(`Appending ${dataFromInputForm} to contact attributes`);
            attrs = { ...attrs, ...dataFromInputForm };
        }
        if (initialPropertiesContAttrs) {
            log(`Appending ${initialPropertiesContAttrs} to contact attributes`);
            attrs = { ...attrs, ...initialPropertiesContAttrs };
        }
        return attrs;
    };

    const initializeChat = () => {
        const { name, username } = getNameAndUserName(dataFromInputForm, initialProperties.name, initialProperties.username);
        log('Name and username to initiate a chat connection: ', { name, username });

        let contactAttrs = getContactAttrsForContactFlow(name, username, dataFromInputForm, initialProperties.contactAttr, initialProperties.name, initialProperties.username);
        log('contactAttrs for contact flow: ', contactAttrs);

        let params = {
            name,
            username,
            region,
            apiGatewayEndpoint: apiGateway,
            contactAttributes: JSON.stringify(contactAttrs),
            contactFlowId,
            instanceId,
            featurePermissions: {
                "ATTACHMENTS": !!enableAttachments, 
            },
        };
        log('Params to initiate chat connection: ', params);
        try {
            window.connect.ChatInterface.initiateChat(params, successHandler, failureHandler);
            setChatInitialized(true);
        } catch (e) {
            error('window.connect.ChatInterface.initiateChat');
            error(e);
            setChatInitialized(false);
        }
    };
    useEffect(() => {
        log("useEffect");
    
        // Initialize the Amazon Chat Interface
        try {
            window.connect.ChatInterface.init({
                containerId: 'chat-widget',
                headerConfig: {
                    isHTML: true,
                    render: () => {
                        return (`<div class="header-wrapper">
                            <div class="logodata">
                            <img src="./img/logo.png" style={{ marginRight: 10px;width:30px }}></img>
                                    <h2 class="welcome-text">Customer Support</h2>
                                    <AiOutlineClose size={24} color="#fff" style={{ cursor: 'pointer' }}  />
                                    </div>
                                </div>`);
                    }
                },
            });
        } catch (e) {
            error('window.connect.ChatInterface.init');
            error(e);
        }
    
        // Handle toggling to the form when chat ends
        if (toggleToForm && !widgetIsOpen) {
            setCurrentState(chatWithFormStates.FORM); // Ensure form is displayed
            setToggleToForm(false);
        }
    
        // Initialize chat if not already initialized
        if (!chatInitialized) {
            initializeChat();
        }
    }, [widgetIsOpen, chatInitialized, toggleToForm]);
    
    /*useEffect(() => {
        log("useEffect");
        try {
            window.connect.ChatInterface.init({
                containerId: 'chat-widget',
                headerConfig: {
                    isHTML: true,
                    render: () => {
                        return (`<div class="header-wrapper">
                            <div class="logodata">
                            <img src="./img/logo.png" style={{ marginRight: 10px;width:30px }}></img>
                                    <h2 class="welcome-text">Customer Support</h2>
                                    <AiOutlineClose size={24} color="#fff" style={{ cursor: 'pointer' }}  />
                                    </div>
                                </div>`);
                    }
                },
            });
        } catch (e) {
            error('window.connect.ChatInterface.init');
            error(e);
        }

        if (toggleToForm && !widgetIsOpen) {
            setCurrentState(chatWithFormStates.FORM);
            setToggleToForm(false);
        }
        if (!chatInitialized) {
            initializeChat();
        }
    }, [widgetIsOpen]);*/

    return (
        <ChatContainer id="chat-container" device={device}>
            <ChatWrapper id="chat-wrapper" primaryColor={primaryColor} device={device}>
                <div id="chat-widget"></div>
                {isBotTyping && (
                    <div className="typing-indicator">
                        {/* <Spinner primaryColor={primaryColor} /> */}
                        <p>Criteria is typing...</p>
                    </div>
                )}
            </ChatWrapper>
            {/* {loading && <Spinner primaryColor={primaryColor} />} */}
        </ChatContainer>
    );
};

export default ChatWidget;
