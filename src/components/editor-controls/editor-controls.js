import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rebass';
import { StyledEditorControls } from './editor-controls.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faCode,
  faList,
  faListOl,
  faQuoteRight,
  faBold,
  faItalic,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';

const EditorFormater = ({
  onUnderlineClick,
  onItalicClick,
  onBoldClick,
  onH1Click,
  onH2Click,
  onH3Click,
  onH4Click,
  onH5Click,
  onH6Click,
  onBlockquoteClick,
  onOLClick,
  onULClick,
  onCodeBlockClick,
  onAddImageClick,
}) => {
  return (
    <StyledEditorControls>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onUnderlineClick}
      >
        <FontAwesomeIcon icon={faUnderline} />
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onItalicClick}
      >
        <FontAwesomeIcon icon={faItalic} />
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={900}
        bg="#455A64"
        type="button"
        onClick={onBoldClick}
      >
        <FontAwesomeIcon icon={faBold} />
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onH1Click}
      >
        <b>H1</b>
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onH2Click}
      >
        <b>H2</b>
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onH3Click}
      >
        <b>H3</b>
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onH4Click}
      >
        <b>H4</b>
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onH5Click}
      >
        <b>H5</b>
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onH6Click}
      >
        <b>H6</b>
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onBlockquoteClick}
      >
        <FontAwesomeIcon icon={faQuoteRight} />
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onOLClick}
      >
        <FontAwesomeIcon icon={faListOl} />
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onULClick}
      >
        <FontAwesomeIcon icon={faList} />
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onCodeBlockClick}
      >
        <FontAwesomeIcon icon={faCode} />
      </Button>
      <Button
        fontSize={15}
        px={2}
        py={1}
        m={1.9}
        fontWeight={400}
        bg="#455A64"
        type="button"
        onClick={onAddImageClick}
      >
        <FontAwesomeIcon icon={faImage} />
      </Button>
    </StyledEditorControls>
  );
};

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
  onAddImageClick: PropTypes.func.isRequired,
};

export default EditorFormater;
