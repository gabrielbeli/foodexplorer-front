import styled from 'styled-components'

export const SearchContainer = styled.div`
  background: ${(props) => props.theme.DARK[900]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex: 2;
  padding-left: 1.2rem;

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > svg {
    min-width: 1.5rem;
  }

  > div {
    width: 100%;

    > label {
      display: none;
    }

    > input:focus {
      outline: none;
    }
  }
`
