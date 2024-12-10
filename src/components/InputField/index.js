import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { device, inputFieldValidations } from '../../constants';
import { InputSection, Label, Input, Error } from './styled';

const InputField = forwardRef((props, ref) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        setError(""); // Reset error on change
        props.onChange(e.target.name, e.target.value);
    };

    const validate = () => {
        // Return true if valid, else return false
        if (props.validation) {
            const currentRule = props.validation;
        
            // Trim value to avoid empty spaces causing issues
            const trimmedValue = value.trim();
        
            // Email validation logic
            if (props.name.toLowerCase() === 'email address') {
                if (!trimmedValue) {
                    setError("Please enter your email address");
                    return false;
                }
                console.log(props.name)
                // Check email format
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailPattern.test(trimmedValue)) {
                    setError("Please enter a valid email address");
                    return false;
                }
            }
            if (props.name.toLowerCase() === 'company name') {
                if (!trimmedValue) {
                    setError("Please enter your Company Name");
                    return false;
                }
            }
            // Required field validation for all fields (including email)
            if (currentRule === inputFieldValidations.REQUIRED) {
                if (!trimmedValue) {
                    // Custom message based on field name
                    if (props.name.toLowerCase() === 'name') {
                        setError("Please enter your name");
                    } else if (props.name.toLowerCase() === 'email address') {
                        setError("Please enter your email address");
                    }
                    else if (props.name.toLowerCase() === 'company name') {
                        setError("Please enter your comapny name");
                    }
                    else {
                        setError(`Please enter ${props.name.toLowerCase()}`);
                    }
                    return false;
                }
            }
        }
        
        // Clear error if all validations pass
        setError(null);
        return true;
    };

    useImperativeHandle(ref, () => {
        return {
            validate: () => validate(),
        };
    });

    return (
        <InputSection>
            {props.label && <Label>{props.label}</Label>}
            <Input
                placeholder={props.placeholder}
                name={props.name}
                onChange={(e) => handleChange(e)}
                type={props.type}
                value={props.value ? props.value : value}
                autoComplete={props.autoComplete}
                device={device}
            />
            {error && <Error>{error}</Error>}
        </InputSection>
    );
});

InputField.defaultProps = {
    placeholder: "",
    name: "",
    value: "",
    type: "text",
    autoComplete: "off",
    validation: inputFieldValidations.NOT_REQUIRED,
};

export default InputField;  
