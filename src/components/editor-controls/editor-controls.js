import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rebass';
import { StyledEditorControls } from './editor-controls.css';

const EditorFormater = ({ onUnderlineClick, onItalicClick, onBoldClick, onH1Click, onH2Click, onH3Click, onH4Click, onH5Click, onH6Click, onBlockquoteClick, onOLClick, onULClick, onCodeBlockClick }) => {
  return (
    <StyledEditorControls>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onUnderlineClick}><u>U</u></Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onItalicClick}><i>I</i></Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={900} bg="#455A64" type="button" onClick={onBoldClick}>B</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onH1Click}>H1</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onH2Click}>H2</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onH3Click}>H3</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onH4Click}>H4</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onH5Click}>H5</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onH6Click}>H6</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onBlockquoteClick}>Blockquote</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onOLClick}>UL</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onULClick}>OL</Button>
      <Button fontSize={15} px={2} py={1} m={1.9} fontWeight={400} bg="#455A64" type="button" onClick={onCodeBlockClick}>Code</Button>
    </StyledEditorControls>
  );
}

EditorFormater.propTypes = {
  onUnderlineClick: PropTypes.func.isRequired,
  onItalicClick: PropTypes.func.isRequired,
  onBoldClick: PropTypes.func.isRequired,
  onH1Click: PropTypes.func.isRequired,
  onH2Click: PropTypes.func.isRequired,
  onH3Click: PropTypes.func.isRequired,
  onH4Click: PropTypes.func.isRequired,
  onH5Click: PropTypes.func.isRequired,
  onH6Click: PropTypes.func.isRequired,
  onBlockquoteClick: PropTypes.func.isRequired,
  onULClick: PropTypes.func.isRequired,
  onOLClick: PropTypes.func.isRequired,
  onCodeBlockClick: PropTypes.func.isRequired,
}

export default EditorFormater;
