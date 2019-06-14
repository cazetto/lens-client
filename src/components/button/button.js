import React from 'react';
import { StyledButton } from './button.css';

const Button = props => {
  return (
    <StyledButton {...props}>{props.children}</StyledButton>
  );
}

export default Button;
