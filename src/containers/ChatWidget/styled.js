import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px'
};

export const ChatWrapper = styled.div`
  .header-wrapper {
    background: ${props => props.primaryColor || "#3F5773"};
    text-align: center;
    padding: 15px;
    color: #fff !important;
    position: sticky;
    top: 0;
    z-index: 10;
    border-radius: 10px 10px 0 0;

    @media (max-width: ${breakpoints.mobile}) {
      padding: 10px;
    }
  }
  .logodata{
  display:flex;
  justify-content: space-between;
  }
  .logodata img{
  width:30px;
  margin-right:10px;
  }
  .footer-actions {
    background: rgba(242, 242, 242, 0.49);
    padding: 10px;
    border-radius: 0 0 10px 10px;
  }
  .incoming-user-message {
    color: blue; 
    }
  .welcome-text {
    color: white;
    text-align: left;
    margin: 0;
    padding-right: 40px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 14px;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobile}) {
      gap: 5px;
    }

    button {
      min-width: 85px;
      font-weight: bold;

      @media (max-width: ${breakpoints.mobile}) {
        min-width: 70px;
        font-size: 14px;
      }
    }
  }

  .connect-customer-interface {
    display: flex;
    flex-direction: column;
    // height: calc(100vh - 150px);
    max-height: 600px;
    width: 100%;
    max-width: 600px;
    overflow-y: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.tablet}) {
      height: calc(100vh - 120px);
    }

    @media (max-width: ${breakpoints.mobile}) {
      height: calc(100vh - 100px);
    }
  }
.eMnscU {
    background: rgb(215 215 215);
}
    .fZyvSv {
    display: none;
}
    .eMnscU::after {
    display: none;
}
  .input-section {
    position: sticky;
    bottom: 0;
    background: white;
    padding: 15px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.mobile}) {
      padding: 10px;
    }
  }

  .action-button {
    width: 100%;
    max-width: 260px;
    padding: 12px 15px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(17, 17, 17);
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #f8f8f8;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 220px;
      padding: 10px 12px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 200px;
      padding: 8px 10px;
      font-size: 13px;
    }
  }
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 600px;
  height: auto;
  max-height: calc(100vh - 40px);
  z-index: 9999;
  transition: all 0.3s ease;

  @media (max-width: ${breakpoints.laptop}) {
    width: 500px;
    bottom: 15px;
    right: 15px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(100% - 40px);
    max-width: 450px;
    bottom: 10px;
    right: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: calc(100% - 20px);
    right: 10px;
    bottom: 10px;
  }
`;

const ChatComponent = () => {
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
      <ChatContainer>
        <ChatWrapper>
          <div className="header-wrapper">Header</div>
          <div className="connect-customer-interface">Chat Content</div>
          <div className="input-section">Input Section</div>
        </ChatWrapper>
      </ChatContainer>
    </>
  );
};

export default ChatComponent;
