import styled from 'styled-components'

export const AddIngredientsContainer = styled.div`
  width: fit-content;
  height: 3.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  outline: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : `${theme.LIGHT[500]}`};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.LIGHT[500]}` : 'none'};

  > input {
    color: ${(props) => props.theme.LIGHT[100]};
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.LIGHT[100]};
    }
  }

  > button {
    background: none;
    border: none;

    > svg {
      width: 100%;
      height: 100%;
      color: ${({ theme, isNew }) =>
        isNew ? `${theme.LIGHT[100]}` : `${theme.LIGHT[100]}`};

      &:hover {
        color: ${(props) => props.theme.TINTS.CAKE[100]};
      }
    }
  }
`
