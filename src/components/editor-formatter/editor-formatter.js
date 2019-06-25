import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rebass';
import { StyledEditorFormater } from './editor-formatter.css';

const EditorFormater = ({ onUnderlineClick, onItalicClick, onBoldClick }) => {
  return (
    <StyledEditorFormater>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onUnderlineClick}><u>U</u></Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onItalicClick}><i>I</i></Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={900} bg="#455A64" type="button" onClick={onBoldClick}>B</Button>
    </StyledEditorFormater>
  );
}

EditorFormater.propTypes = {
  onUnderlineClick: PropTypes.func.isRequired,
  onItalicClick: PropTypes.func.isRequired,
  onBoldClick: PropTypes.func.isRequired,
}

export default EditorFormater;
