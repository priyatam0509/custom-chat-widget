import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

// Breakpoints for different screen sizes
const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

export const FormSection = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 600px;
  // height: 600px;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: #f0f0f0;
  z-index: 9999;
  margin: 20px;

  @media (min-width: ${breakpoints.desktop}) {
    width: 600px;
    height: 600px;
    bottom: 20px;
    right: 20px;
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 500px;
    // height: 550px;
    bottom: 15px;
    right: 15px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(100% - 40px);
    height: 500px;
    max-height: 80vh;
    bottom: 10px;
    right: 20px;
    margin: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: calc(100% - 20px);
    height: auto;
    min-height: 400px;
    max-height: 85vh;
    bottom: 5px;
    right: 10px;
    margin: 5px;
    border-radius: 8px;
  }
`;

export const Form = styled.form`
  padding: 20px;
  // grid-row: 2/3;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: flex-start; /* Align items to the left */
  // gap: 15px;
  // box-sizing: border-box;
  // text-align: left;
  background: white;
  // height: 100%;
  overflow-y: auto;
  font-family: 'Montserrat', sans-serif;

  label {
    width: 100%; /* Ensure the label spans the full width */
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%; /* Ensure the input spans the full width */
    max-width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom:10px
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
    gap: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
    gap: 10px;
    border-radius: 0 0 8px 8px;
  }
`;

export const FormHeader = styled.div`
  background: ${(props) => (props.primaryColor ? props.primaryColor : '#3F5773')};
  color: white;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  position: relative;

  .preChatForm-welcome-text {
    color: white;
    text-align: left;
    margin: 0;
    padding-right: 40px;
    font-family: 'Montserrat', sans-serif;
  }
  img{
  width:30px;
  margin-right:10px
  }
  .close-button {
    cursor: pointer;
    background: transparent;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: ${breakpoints.laptop}) {
    padding: 12px 15px;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
    font-size: 15px;
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    font-size: 14px;

    .close-button {
      font-size: 14px;
      right: 8px;
    }
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 150px;
  background-color: #002554;
  color: white;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  padding: 12px;
  border: none;
  cursor: pointer;
  border-radius:13px;
  transition: all 0.3s ease;
  font-size: 16px;
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1),
    inset -3px -3px 5px rgba(241, 255, 255, 0.3);
  align-self: center; /* Center the button */

  &:hover {
    background-color: #001a3c;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 140px;
    padding: 10px;
    font-size: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 130px;
    padding: 8px;
    font-size: 14px;
    margin-top: 15px;
  }
`;
export const TooltipText = styled.div`
  // display: none;
  position: absolute;
  top: 40%; /* Positions the tooltip below the field */
  left: 19%;
  // transform: translateX(-50%);
  background-color: #3F5773; /* Tooltip background color */
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  // white-space: nowrap;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   width: 50%;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 6px;
  }

  /* Tooltip arrow */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #3F5773 transparent;
  }

  /* Parent hover triggers tooltip visibility */
  &:hover {
    display: block;
  }
`;

const FormComponent = () => {
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
      <FormSection>
        <FormHeader>
          <div className="preChatForm-welcome-text">Welcome</div>
          <button className="close-button">X</button>
        </FormHeader>
        <Form>
          <label htmlFor="input">Input Label</label>
          <input id="input" type="text" placeholder="Enter text" />
          
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </FormSection>
      <TooltipText visible={isTooltipVisible}>
            {/* Please enter a valid email address. */}
          </TooltipText>
    </>
  );
};

export default FormComponent;
