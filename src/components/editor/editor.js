import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import EditorFormater from 'components/editor-formatter';

const CustomEditor = props => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = newState => {
    const rawContent = convertToRaw(newState.getCurrentContent());
    const strContent = JSON.stringify(rawContent, null, 2);
    props.onChange(strContent);
    setEditorState(newState);
  }

  const onUnderlineClick = () => onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  const onItalicClick = () => onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  const onBoldClick = () => onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));

  return (
    <div>
      <button type="button" onClick={onUnderlineClick}>U</button>
      <button type="button" onClick={onItalicClick}>I</button>
      <button type="button" onClick={onBoldClick}>B</button>
      <Editor
        editorState={editorState}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomEditor;
