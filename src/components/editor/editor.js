import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import EditorFormater from 'components/editor-formatter';
import { StyledEditor } from './editor.css';

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
    <StyledEditor>
      <EditorFormater onUnderlineClick={onUnderlineClick} onItalicClick={onItalicClick} onBoldClick={onBoldClick} />
      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={onChange}
        />
      </div>
    </StyledEditor>
  );
}

export default CustomEditor;
