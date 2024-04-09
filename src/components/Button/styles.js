import styled from 'styled-components'

export const ButtonContainer = styled.main`
  background: ${(props) => props.theme.TINTS.TOMATO[100]};
  color: ${(props) => props.theme.LIGHT[100]};
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;

  width: 100%;

  display: flex;
  border-radius: 8px;
  padding: 1.2rem 2.4rem;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    filter: none;
    cursor: wait;
  }

  > svg {
    font-size: 2.4rem;
  }
`
