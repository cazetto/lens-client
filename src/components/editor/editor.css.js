import styled from 'styled-components';

export const StyledEditor = styled.div`
  .editor {
    padding: 1.2em;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }
  h2 {
    font-size: 3rem;
    font-weight: 600;
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  h4 {
    font-size: 2rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.8rem;
    font-weight: 300;
  }
  h6 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  blockquote {
    font-family: 'Hoefler Text', 'Georgia', serif;
    font-style: italic;
    color: #666;
    border-left: 2px solid #1e88e5;
    margin: 0 !important;
    padding: 10px;
    width: 20%;
    /* margin-left: 10px; */
    margin: 16px 0;
    padding: 10px 20px;
  }

  /**
   * Copyright (c) Facebook, Inc. and its affiliates. All rights reserved.
   *
   * This file provided by Facebook is for non-commercial testing and evaluation
   * purposes only. Facebook reserves all rights not expressly granted.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
   * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
   * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
   * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */

  .DraftEditor-editor .DraftEditor-blockquote {
    border-left: 5px solid #eee;
    color: #666;
    font-family: 'Hoefler Text', 'Georgia', serif;
    font-style: italic;
    margin: 16px 0;
    padding: 10px 20px;
  }

  .DraftEditor-editor .public-DraftStyleDefault-pre {
    background-color: rgba(0, 0, 0, 0.05);
    font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
    font-size: 16px;
    padding: 20px;
  }

  .DraftEditor-controls {
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
    user-select: none;
  }

  .DraftEditor-styleButton {
    color: #999;
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
  }

  .DraftEditor-activeButton {
    color: #5890ff;
  }
`;
