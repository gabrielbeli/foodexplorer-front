import styled from 'styled-components'

export const FavoritesContainer = styled.main`
  padding: 4rem 5rem 4rem 5rem;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 4rem;
    line-height: 4.5rem;

    margin-bottom: 3.2rem;
    margin-left: 2rem;
  }
  > ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
    gap: 3.2rem;
  }

  @media (min-width: 992px) {
    > ul {
      gap: 4.8rem;
    }
  }
`
