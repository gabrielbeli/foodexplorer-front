import styled from 'styled-components'

export const CounterContainer = styled.main`
  font-size: 2rem;
  font-weight: 700;

  display: flex;
  gap: 1.4rem;
  align-items: center;

  button {
    background: transparent;
    width: 2rem;

    svg {
      font-size: 2.4rem;
      color: ${(props) => props.theme.LIGHT[100]};

      &:hover {
        color: ${(props) => props.theme.TINTS.CAKE[200]};
      }
    }
  }
`
