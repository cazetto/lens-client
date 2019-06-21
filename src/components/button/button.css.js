import styled from 'styled-components';

export const StyledButton = styled.button`
  -webkit-appearance: none;
  background-color: #fff;
  outline: 0;
  border: none;
  border-radius: 2em;
  color: #37474f;
  border: 1px solid #eceff1;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 4rem 0 2rem;
  padding: 1.4em;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #eceff1;
  }

  & + & {
    margin-left: 1rem;
  }
`;
