import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 95%;
    // max-width: 400px;
`;

export const Label = styled.label`
    display: block;
    font-family: 'Montserrat', sans-serif;
    padding-top: 10px;
    text-align: left;
    margin-bottom: 5px;
    font-weight: bold;
    width: 100%;
`;

export const Input = styled.input`
    background-color: transparent;
    border-radius: 10px;
    padding: 10px;
    width: 100%;

    @media ${(props) => props.device.laptop} {
        border: unset;
        outline: unset;
    }

    box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1),
                inset -3px -3px 5px rgba(241, 255, 255, 0.5);

    @media (max-width: 768px) {
        padding: 12px;
    }

    @media (max-width: 480px) {
        padding: 8px;
        max-width: calc(100% - 20px);
        box-sizing: border-box;
    }
`;

export const Error = styled.p`
    margin-top: 10px;
    font-weight: bold;
    font-style: italic;
    color: #b60000;
`;

const MyComponent = () => {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <InputSection>
                <Label>Enter your text:</Label>
                <Input type="text" />
                <Error>Something went wrong!</Error>
            </InputSection>
        </>
    );
};

export default MyComponent;
