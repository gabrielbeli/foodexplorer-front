import styled from 'styled-components'

export const InputContainer = styled.div`
  color: ${(props) => props.theme.LIGHT[400]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  input {
    background: ${(props) => props.theme.DARK[900]};
    color: ${(props) => props.theme.LIGHT[400]};

    padding: 1.2rem 1.4rem;
    border: none;
    border-radius: 8px;
    transition: outline 0.1s;

    &:focus {
      outline: 2px solid ${(props) => props.theme.TINTS.CAKE[300]};
    }

    &::placeholder {
      color: ${(props) => props.theme.LIGHT[500]};
    }
  }
`
