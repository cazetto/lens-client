import styled from 'styled-components';

export const StyledButton = styled.button`
  -webkit-appearance: none;
  background-color: #fff;
  outline: 0;
  border: none;
  border-radius: 2em;
  color: #37474F;
  border: 1px solid #ECEFF1;
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
    background-color: #ECEFF1;
  }

  & + & {
    margin-left: 1rem;
  }
`;
