import React from 'react';
import PropTypes from 'prop-types';

const EditorFormater = ({ onUnderlineClick, onItalicClick, onBoldClick }) => {
  return (
    <div>
      <button onClick={onUnderlineClick}>U</button>
      <button onClick={onItalicClick}>I</button>
      <button onClick={onBoldClick}>B</button>
    </div>
  );
}

EditorFormater.propTypes = {
  onUnderlineClick: PropTypes.func.isRequired,
  onItalicClick: PropTypes.func.isRequired,
  onBoldClick: PropTypes.func.isRequired,
}

export default EditorFormater;
