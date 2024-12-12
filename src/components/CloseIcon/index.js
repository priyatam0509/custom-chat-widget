import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";

// The CloseIcon component takes `setWidgetIsOpen` as a prop
const CloseIcon = ({ setWidgetIsOpen }) => {
  // Function to handle the close button click
  const handleCrossButton = () => {
    setWidgetIsOpen(false);  // Close the widget by setting the state to false
  };

  return (
    <AiOutlineClose
      onClick={handleCrossButton}
      size={24}
      color="#fff"
      style={{ cursor: 'pointer' }}
    />
  );
}

export default CloseIcon;
