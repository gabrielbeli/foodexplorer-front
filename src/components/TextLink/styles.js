import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TextContainer = styled(Link)`
  color: ${(props) => props.theme.LIGHT[100]};

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;

  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.TINTS.CAKE[200]};
  }

  > svg {
    font-size: 3rem;
  }
`
