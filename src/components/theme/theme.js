import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import themeConfig from './theme-config';

const Theme = props => (
  <ThemeProvider theme={themeConfig}>{props.children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
