import styled from 'styled-components';

export const Container = styled.nav`
  button {
    outline: none !important;
    cursor: pointer;
  }

  .user {
    cursor: default;
    user-select: none;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      padding-top: 10px;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
