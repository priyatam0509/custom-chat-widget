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

            // Required field validation
            if (currentRule === inputFieldValidations.REQUIRED) {
                if (!value) {
                    setError("This field is required");
                    return false;
                }
            }

            // Email format validation
            if (props.name.toLowerCase() === 'email') {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailPattern.test(value)) {
                    setError("Please enter a valid email address");
                    return false;
                }
            }
        }

        return true; // Return true if all validations pass
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
