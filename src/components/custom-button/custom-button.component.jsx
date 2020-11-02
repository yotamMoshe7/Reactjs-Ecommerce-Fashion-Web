import React from 'react';
import './custom-button.styles.scss';
import { Button } from 'react-bootstrap';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
  <Button 
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </Button>
);

export default CustomButton;