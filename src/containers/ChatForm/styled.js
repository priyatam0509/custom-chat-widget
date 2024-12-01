// /*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0 */


// import styled from 'styled-components';


// export const FormSection = styled.div`
//   position: fixed;
//   bottom: 75px;
//   right: 30px;
//   @media ${props => props.device.laptop}{
//     width: 420px;
//     bottom: 100px;
//     right: 80px;
//     height: 420px;
//   }
//   width: 320px;
//   height: 450px;
//   overflow-y: auto;
//   display: grid;
//   grid-template-rows: repeat(2, 1fr);
//   grid-template-columns: 1fr;
//   box-shadow: rgb(221, 221, 221) 0px 2px 3px;
//   background: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255) 80%, rgb(255, 255, 255));
//   z-index:999;
// `;

// export const Form = styled.form`
//     border-radius: 20px;
// 	@media ${props => props.device.laptop}{
// 		height: 460px;
//   	}
//     height: 360px;
//     grid-row: 2/3;
// 	display: flex;
// 	flex-direction: column;
// 	/* box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.1),
// 		-7px -7px 20px rgba(241, 255, 255, 1); */
// 	align-items: center;
// 	box-sizing: border-box;
// 	text-align: center;
// 	margin: 0;
// 	transition: right .6s ease-in-out;
// `;

// export const FormHeader = styled.div`
//         background: ${props => props.primaryColor ? props.primaryColor : "#3F5773"};
//         text-align: center;
//         @media ${props => props.device.laptop}{
//             padding: 20px;
//         }
//         padding: 20px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         border-radius: 3px;
//         grid-row: 1/2;
//         height: 40px;
//         .preChatForm-welcome-text{
//             color: whitesmoke;

//             display: inline;
//         }
// `;


// export const SubmitButton = styled.button`
//     margin-top: 20px;
// 	width: 130px;
// 	background-color: transparent;
// 	outline: none;
// 	color: #292929;
// 	font-weight: bold;
// 	border-radius: 10px;
// 	padding: 10px;
// 	transition: ease all 250ms;
// 	box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.1), -7px -7px 20px rgb(241, 255, 255);
// 	border: unset;
//     &&:hover {
// 	cursor: pointer;
// 	color: #292929;
// 	box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1),
// 		inset -3px -3px 5px rgba(241, 255, 255, 0.5);
// }
// `;


/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0 */
// import styled from 'styled-components';

// export const FormSection = styled.div`
//   position: fixed;
//   bottom: 20px; /* Distance from the bottom */
//   right: 20px; /* Distance from the right */
//   width: 400px; /* Increased width for the chat widget */
//   height: 600px; /* Increased height for the chat widget */
//   overflow-y: auto;
//   display: grid;
//   grid-template-rows: auto 1fr; /* Header + Form body */
//   grid-template-columns: 1fr;
//   border-radius: 10px; /* Rounded corners */
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//   background: white; /* Widget background color */
//   z-index: 9999; /* Make sure it appears above other content */

//   @media ${(props) => props.device.laptop} {
//     width: 450px; /* Slightly larger for laptops */
//     height: 650px;
//   }
// `;

// export const Form = styled.form`
//   border-radius: 0 0 10px 10px; /* Rounded bottom edges */
//   padding: 20px;
//   grid-row: 2/3; /* Form body occupies the second grid row */
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   box-sizing: border-box;
//   text-align: center;
// `;

// export const FormHeader = styled.div`
//   background: ${(props) => (props.primaryColor ? props.primaryColor : '#3F5773')};
//   color: white;
//   text-align: center;
//   padding: 15px;
//   font-size: 18px;
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-radius: 10px 10px 0 0; /* Rounded top edges */
//   grid-row: 1/2; /* Header occupies the first grid row */

//   .preChatForm-welcome-text {
//     color: white;
//     margin-left: 10px;
//   }

//   .close-button {
//     cursor: pointer;
//     background: transparent;
//     border: none;
//     color: white;
//     font-size: 16px;
//     font-weight: bold;
//   }
// `;

// export const SubmitButton = styled.button`
//   margin-top: 20px;
//   width: 150px;
//   background-color: #3F5773;
//   color: white;
//   font-weight: bold;
//   border-radius: 5px;
//   padding: 10px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #2d4053;
//   }
// `;

// import styled from 'styled-components';

// export const FormSection = styled.div`
//   position: fixed;
//   bottom: 20px; /* Distance from the bottom */
//   right: 20px; /* Distance from the right */
//   width: 600px !important; /* Widget width */
//   height: 650px; /* Widget height */
//   overflow-y: auto;
//   display: grid;
//   grid-template-rows: auto 1fr; /* Header + Form body */
//   grid-template-columns: 1fr;
//   border-radius: 10px; /* Rounded corners */
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//   background: #f0f0f0; /* Grey background color */
//   z-index: 9999; /* Make sure it appears above other content */

//   @media ${(props) => props.device.laptop} {
//     width: 450px; /* Slightly larger for laptops */
//     height: 650px;
//   }
// `;

// export const Form = styled.form`
//   border-radius: 0 0 10px 10px; /* Rounded bottom edges */
//   padding: 20px;
//   grid-row: 2/3; /* Form body occupies the second grid row */
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   box-sizing: border-box;
//   text-align: center;
//   background: #f0f0f0; /* Ensure consistent grey background for the form */
// `;

// export const FormHeader = styled.div`
//   background: ${(props) => (props.primaryColor ? props.primaryColor : '#3F5773')};
//   color: white;
//   text-align: center;
//   padding: 5px; !important
//   font-size: 18px;
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-radius: 10px 10px 0 0; /* Rounded top edges */
 
  

//   .preChatForm-welcome-text {
//     color: white;
//     display: flex !important; /* Enable flexbox */
//     justify-content: center !important; /* Center horizontally */
//     align-items: center !important; /* Center vertically */
//     text-align: center !important; /* Ensure text is centered */
//     height: 100% !important; /* Ensure full height is utilized */
// }

//   .close-button {
//     cursor: pointer;
//     background: transparent;
//     border: none;
//     color: white;
//     font-size: 16px;
//     font-weight: bold;
//   }
// `;

// export const SubmitButton = styled.button`
//   margin-top: 20px;
//   width: 150px;
//   background-color: #3F5773;
//   color: white;
//   font-weight: bold;
//   border-radius: 5px;
//   padding: 10px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #2d4053;
//   }
// `;


import styled from 'styled-components';

export const FormSection = styled.div`
  position: fixed;
  bottom: 20px; /* Distance from the bottom */
  right: 20px; /* Distance from the right */
  width: 600px !important; /* Widget width */
  height: 650px; /* Widget height */
  overflow-y: auto;
  display: grid;
  grid-template-rows: auto 1fr; /* Header + Form body */
  grid-template-columns: 1fr;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  background: #f0f0f0; /* Grey background color */
  z-index: 9999; /* Make sure it appears above other content */

  @media ${(props) => props.device.laptop} {
    width: 450px; /* Slightly larger for laptops */
    height: 650px;
  }
`;

export const Form = styled.form`
  border-radius: 0 0 10px 10px; /* Rounded bottom edges */
  padding: 20px;
  grid-row: 2/3; /* Form body occupies the second grid row */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  background: #f0f0f0; /* Ensure consistent grey background for the form */
`;

export const FormHeader = styled.div`
  background: ${(props) => (props.primaryColor ? props.primaryColor : '#3F5773')};
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center; /* Ensure header text is centered horizontally */
  border-radius: 10px 10px 0 0; /* Rounded top edges */

  .preChatForm-welcome-text {
    color: white;
    display: inline-block; /* Prevent unwanted stretching */
    text-align: center; /* Center the text itself */
    margin: 0 auto; /* Center within parent */
    width: 100%; /* Utilize full width for proper alignment */
  }

  .close-button {
    cursor: pointer;
    background: transparent;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute; /* Allow proper positioning */
    right: 10px; /* Adjust based on requirements */
    top: 10px;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 150px;
  background-color: #3F5773;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2d4053;
  }
`;

