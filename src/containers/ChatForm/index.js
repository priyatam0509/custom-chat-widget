// /*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0 */

// import React, { createRef, useRef, useContext } from 'react';
// import { useAppConfig } from '../../providers/AppConfigProvider';
// import { device, chatWithFormStates, loggerNames, inputFieldValidations } from '../../constants';
// import InputField from '../../components/InputField';
// import { FormSection, SubmitButton, FormHeader, Form } from './styled';
// import { genLogger } from "../../lib/logger";

// const name = loggerNames.containers.CHAT_FORM;
// const { log } = genLogger(name);



// const ChatForm = ({setData, setCurrentState}) => {
//     log('>>> Init');
//     const { primaryColor, description, preChatForm: { inputFields } } = useAppConfig();
//     const inputRefs = useRef(inputFields.map(field => createRef()));
//     const handleInputDataChange = (name, value) => {
//         setData(prev => ({
//         ...prev,
//         [name]: value
//         }))
//     }

//     const submitForm = (e) => {
//         e.preventDefault();
//         log("formsubmitted");
//         let isValid = true;

//         inputRefs.current.forEach(inputRef => {
//             log(`Running validate function for ${inputRef.current}`);
//             const valid = inputRef.current.validate();
//             log(valid);
//             if (!valid) isValid = false
//         })

//         if (!isValid) {
//             return
//         }
//         log('Form validated continued...');
//         setCurrentState(chatWithFormStates.CHAT_WIDGET);
//     }

//     return (
//         <FormSection device={device}>
//                 <FormHeader primaryColor={primaryColor} device={device}>
//                     <h2 className="preChatForm-welcome-text"> {description}</h2> 
//                 </FormHeader>
//                 <Form onSubmit={submitForm} device={device}>
//                 {
//                     inputFields.map(field => (
//                     <InputField
//                         key={inputFields.indexOf(field)}
//                         ref = {inputRefs.current[inputFields.indexOf(field)]}
//                         name={field.name}
//                         label={field.name}
//                         onChange={handleInputDataChange}
//                         validation={field.validation ? field.validation : inputFieldValidations.NOT_REQUIRED}
//                         hoverText="please enter event ID"
//                     />

//                     ))

//                 }
//                 <label style={{ display: 'flex', alignItems: 'center', marginTop: '16px', cursor: 'pointer', fontFamily: '-apple-system, system-ui, sans-serif' }}>
//             <input 
//                 type="checkbox" 
//                 required 
//                 style={{ width: '18px', height: '18px', marginRight: '10px', cursor: 'pointer', accentColor: '#4a90e2' }}
//             />
//             <span style={{ color: '#333', fontSize: '14px' }}>We are here to help! using our chat means we collect basic info to assit you, see our privacy policy for details.</span>
//             </label>
//                     <SubmitButton>Submit</SubmitButton>
//                 </Form> 
//         </FormSection>
//     )
// }

// export default ChatForm;


import React, { createRef, useRef } from 'react';
import { useAppConfig } from '../../providers/AppConfigProvider';
import { device, chatWithFormStates, loggerNames, inputFieldValidations } from '../../constants';
import InputField from '../../components/InputField';
import { FormSection, SubmitButton, FormHeader, Form } from './styled';
import { genLogger } from "../../lib/logger";

const name = loggerNames.containers.CHAT_FORM;
const { log } = genLogger(name);

const ChatForm = ({ setData, setCurrentState }) => {
    log('>>> Init');
    const { primaryColor, description, preChatForm: { inputFields } } = useAppConfig();
    const inputRefs = useRef(inputFields.map(field => createRef()));

    const handleInputDataChange = (name, value) => {
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        log("Form submitted");
        let isValid = true;

        inputRefs.current.forEach(inputRef => {
            log(`Running validate function for ${inputRef.current}`);
            const valid = inputRef.current.validate();
            log(valid);
            if (!valid) isValid = false;
        });

        if (!isValid) {
            return;
        }
        log('Form validated, continuing...');
        setCurrentState(chatWithFormStates.CHAT_WIDGET);
    };

    return (
        <FormSection device={device}>
            <FormHeader primaryColor={primaryColor} device={device}>
                <h2 className="preChatForm-welcome-text">{description}</h2>
            </FormHeader>
            <Form onSubmit={submitForm} device={device}>
                {inputFields.map((field) => (
                    <InputField
                        key={inputFields.indexOf(field)}
                        ref={inputRefs.current[inputFields.indexOf(field)]}
                        name={field.name}
                        label={field.name}
                        onChange={handleInputDataChange}
                        validation={field.validation ? field.validation : inputFieldValidations.NOT_REQUIRED}
                        // hoverText={field.name === "Event ID" ? "Enter your event ID" : `Please enter ${field.name}`} // Add hover text logic here
                        hoverText ="Please enter eventID"
                    />
                ))}
                <label
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '16px',
                        cursor: 'pointer',
                        fontFamily: '-apple-system, system-ui, sans-serif',
                    }}
                >
                    <input
                        type="checkbox"
                        required
                        style={{
                            width: '18px',
                            height: '18px',
                            marginRight: '10px',
                            cursor: 'pointer',
                            accentColor: '#4a90e2',
                        }}
                    />
                    <span style={{ color: '#333', fontSize: '14px' }}>
                        We are here to help! Using our chat means we collect basic info to assist you. See our privacy policy for details.
                    </span>
                </label>
                <SubmitButton>Submit</SubmitButton>
            </Form>
        </FormSection>
    );
};

export default ChatForm;
