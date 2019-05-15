import styled from 'styled-components';

export const Container = styled.header`
  .search-bar {
    text-align: center;
    width: 100%;
    transition: all 0.5s;
  }

  .search-bar.to-top-mode {
    margin-top: 0px;
  }

  .search-bar.normal-mode {
    margin-top: 6%;
  }

  .search-bar.to-top-mode > .form {
    padding: 0px 40px;
  }

  .search-bar.to-top-mode > .form > .input {
    width: 100%;
    background: #eeeeee;
    color: #3a7bf0;
    text-align: left;
  }

  .form {
    display: flex;
    justify-content: center;
  }

  .input:focus {
    background: linear-gradient(
      91deg,
      rgba(36, 131, 255, 100) 0%,
      rgba(93, 106, 212, 100) 19%,
      rgba(129, 88, 181, 100) 42%,
      rgba(255, 18, 69, 100) 100%
    );
  }

  .input {
    display: block;
    border: 0;
    height: 32px;
    padding: 14px 0 14px 28px;

    transition: all 0.5s;

    border-radius: 34px;

    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 18px;

    text-align: inherit;
    width: 60%;

    background: linear-gradient(
      91deg,
      rgba(36, 131, 255, 0.85) 0%,
      rgba(93, 106, 212, 0.85) 19%,
      rgba(129, 88, 181, 0.85) 42%,
      rgba(255, 18, 69, 0.85) 100%
    );

    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2483ff', endColorstr='#ff1245',GradientType=1);
  }

  .input:focus {
    outline: none;
  }

  input::placeholder {
    color: #fff;
  }
  .search-bar.to-top-mode > .form > .icon-wrap {
    fill: #3a7bf0;
  }
  .icon-wrap {
    margin-left: -46px;
    margin-top: 4px;
    fill: #fff;
    background: 0;
    outline: 0;
    border: 0;
    /* position: absolute; */
  }
`;
