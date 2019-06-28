import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  EditorState,
  RichUtils,
  convertToRaw,
  AtomicBlockUtils,
} from 'draft-js';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createListDepthPlugin from 'draft-js-list-depth-plugin';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import EditorControls from 'components/editor-controls';
import { StyledEditor } from './editor.css';
// import 'draft-js/dist/Draft.css';

import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });
const listDepthPlugin = createListDepthPlugin();
const markdownShortcutsPlugin = createMarkdownShortcutsPlugin();
const resizePlugin = createResizeablePlugin();
const plugins = [
  listDepthPlugin,
  markdownShortcutsPlugin,
  imagePlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  resizePlugin,
];

const CustomEditor = props => {
  const editor = useRef(null);
  // const focus = () => editor.focus();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = newState => {
    const rawContent = convertToRaw(newState.getCurrentContent());
    const strContent = JSON.stringify(rawContent, null, 2);
    props.onChange(strContent);
    setEditorState(newState);
  };

  const onUnderlineClick = () =>
    onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  const onItalicClick = () =>
    onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  const onBoldClick = () =>
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  const onH1Click = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'header-one'));
  const onH2Click = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'header-two'));
  const onH3Click = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'header-three'));
  const onH4Click = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'header-four'));
  const onH5Click = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'header-five'));
  const onH6Click = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'header-six'));
  const onOLClick = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  const onULClick = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  const onCodeBlockClick = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'code-block'));
  const onBlockquoteClick = () =>
    onChange(RichUtils.toggleBlockType(editorState, 'blockquote'));

  const onAddImageClick = event => {
    event.preventDefault();
    const urlValue = window.prompt('Paste Image Link');
    if (!urlValue) return;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      { src: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
      'create-entity'
    );
    const finalEditorState = AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      entityKey,
      ' '
    );
    setEditorState(finalEditorState);
  };

  return (
    <StyledEditor>
      <EditorControls
        onUnderlineClick={onUnderlineClick}
        onItalicClick={onItalicClick}
        onBoldClick={onBoldClick}
        onH1Click={onH1Click}
        onH2Click={onH2Click}
        onH3Click={onH3Click}
        onH4Click={onH4Click}
        onH5Click={onH5Click}
        onH6Click={onH6Click}
        onBlockquoteClick={onBlockquoteClick}
        onULClick={onULClick}
        onOLClick={onOLClick}
        onCodeBlockClick={onCodeBlockClick}
        onAddImageClick={onAddImageClick}
      />
      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={onChange}
          ref={editor}
          placeholder="Write a story..."
          spellCheck={true}
          plugins={plugins}
        />
      </div>
    </StyledEditor>
  );
};

CustomEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CustomEditor;
