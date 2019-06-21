import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './button.css';

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
