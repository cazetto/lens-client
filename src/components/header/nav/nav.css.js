import styled from 'styled-components';

export const Container = styled.nav`
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
