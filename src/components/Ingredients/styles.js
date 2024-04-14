import styled from 'styled-components'

export const IngredientsContainer = styled.li`
  background: ${(props) => props.theme.DARK[100]};
  color: ${(props) => props.theme.LIGHT[100]};

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;

  padding: 4px 0.8rem;
  min-width: 6rem;
  border-radius: 5px;

  list-style: none;
`
