import React, { createRef, useRef, useState } from 'react';
import { useAppConfig } from '../../providers/AppConfigProvider';
import { device, chatWithFormStates, loggerNames, inputFieldValidations } from '../../constants';
import InputField from '../../components/InputField';
import { FormSection, SubmitButton, FormHeader, Form, TooltipText } from './styled';
import { genLogger } from "../../lib/logger";

const name = loggerNames.containers.CHAT_FORM;
const { log } = genLogger(name);

const ChatForm = ({ setData, setCurrentState }) => {
    log('>>> Init');
    const { primaryColor, description, preChatForm: { inputFields } } = useAppConfig();
    const inputRefs = useRef(inputFields.map(() => createRef()));
    const [activeTooltip, setActiveTooltip] = useState(null);
    const [formData, setFormData] = useState({});  // State to hold form data
    const [emailError, setEmailError] = useState("");  // State for email error message

    const handleInputDataChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Email validation function (regex check)
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    const submitForm = (e) => {
        e.preventDefault();
        log("Form submitted");
        let isValid = true;

        // Reset email error state
        setEmailError("");

        // Validate all input fields
        inputRefs.current.forEach(inputRef => {
            log(`Running validate function for ${inputRef.current}`);
            const valid = inputRef.current.validate();
            log(valid);
            if (!valid) isValid = false;
        });

        // Find the email field from inputFields
        const emailField = inputFields.find(field => field.name.toLowerCase() === 'email');
        
        if (emailField) {
            const emailValue = formData[emailField.name.toLowerCase()]; // Get email value from form data
            
            // Validate email format
            if (emailValue && !validateEmail(emailValue)) {
                isValid = false;
                setEmailError("Invalid email address format");  // Set email error message
                log("Invalid email address format");
            }
        } else {
            log("Email field is missing");
        }

        if (!isValid) {
            return;
        }
        log('Form validated, continuing...');
        setCurrentState(chatWithFormStates.CHAT_WIDGET);
    };

    const getTooltipContent = (fieldName) => {
        switch (fieldName.toLowerCase()) {
            case 'event id':
                return "Enter the unique identifier for your event. This helps us provide specific information.";
            case 'name':
                return "Please enter your full name.";
            case 'email':
                return "Enter a valid email address where we can reach you.";
            default:
                return "";
        }
    };

    return (
        <FormSection device={device}>
            <FormHeader primaryColor={primaryColor} device={device}>
                <h2 className="preChatForm-welcome-text">{description}</h2>
            </FormHeader>
            <Form onSubmit={submitForm} device={device}>
                {inputFields.map((field, index) => (
                    <div key={index} style={{ position: 'relative', marginBottom: '20px' }}>
                        <InputField
                            ref={inputRefs.current[index]}
                            name={field.name}
                            label={field.name}
                            onChange={handleInputDataChange}
                            validation={field.validation || inputFieldValidations.NOT_REQUIRED}
                            onMouseEnter={() => setActiveTooltip(field.name)}
                            onMouseLeave={() => setActiveTooltip(null)}
                        />
                        {activeTooltip === field.name && (
                            <TooltipText>
                                {getTooltipContent(field.name)}
                            </TooltipText>
                        )}
                    </div>
                ))}

                {/* Display email error if there's any */}
                {emailError && <div style={{ color: 'red', marginBottom: '10px' }}>{emailError}</div>}

                <label
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginTop: '16px',
                        cursor: 'pointer',
                        fontFamily: '-apple-system, system-ui, sans-serif',
                        flexDirection: 'row',
                    }}
                >
                    <span style={{ color: '#333', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>
                        Using our chat means we collect basic info to assist you. See our{' '}
                        <a
                            href="https://www.criteriacorp.com/privacy-policy"
                            style={{ color: '#1ec3cb', textDecoration: 'none' }}
                        >
                            privacy policy
                        </a>{' '}
                        for details.
                    </span>
                </label>
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        </FormSection>
    );
};

export default ChatForm;
