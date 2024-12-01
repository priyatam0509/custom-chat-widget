import styled from 'styled-components';

export const ChatWrapper = styled.div`
    .header-wrapper {
        background: ${props => props.primaryColor ? props.primaryColor : "#3F5773"};
        text-align: center;
        padding: 2px;
        color: #fff !important;
    }

    .footer-actions {
        background: rgba(242, 242, 242, 0.49);
        
    }

    .welcome-text {
        color: whitesmoke;
        border-bottom: none;
    }

    .button-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: row;
        height: 100%;
        align-items: center;
        border-radius: 5px;
    }

    .button-wrapper > button {
        min-width: 85px;
        margin: 6px;
        font-weight: bold;
    }

    .connect-customer-interface {
    @media ${props => props.device.laptop} {
        width: 600px !important; /* Widget width */
        height: 650px;
    }
    height: 600px; /* Increased height for more space */
    width: 800px;  /* Increased width for more space */
    
    overflow-y: auto;
    overflow-x: hidden;  /* Prevent horizontal overflow */
    display: flex;
    flex-direction: column;
    border-radius: 10px; /* Rounded corners */
}

.connect-customer-interface > *:not(:first-child) {
    visibility: hidden; /* Hides the other items */
    height: 0; /* Removes their height */
    margin: 0; /* Removes their margin */
    padding: 0; /* Removes their padding */
    overflow: hidden; /* Ensures no content is visible */
}


    .action-button {
        width: 100%;
        line-height: 1.465;
        font-weight: normal;
        white-space: nowrap;
        color: rgb(17, 17, 17);
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        padding-right: 10px;
        padding-left: 10px;
        font-family: AmazonEmber_Md, Helvetica, sans-serif;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        max-width: 260px;
        padding-top: 100px;
        padding-bottom: 0.45rem;
        font-size: 0.875rem;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px 0px;
        border-width: 0px;
        border-style: solid;
        background: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255) 80%, rgb(255, 255, 255));
        border-color: rgb(255, 255, 255);
    }
`;

export const ChatContainer = styled.div`
    @media ${props => props.device.laptop} {
        
       
       
    }
    position: fixed;
    bottom: 65px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3px;
    margin-left: 3px;
    float: left;
    overflow: auto;
    border-radius: 10px 10px 0 0; /* Rounded top corners for visual consistency */
    z-index: 9999;
    
    box-shadow: none; /* Remove shadow from the outer container */
`;
