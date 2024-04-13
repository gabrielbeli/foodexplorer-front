import styled from 'styled-components'

export const HeaderContainer = styled.main`
  grid-area: header;
  background: ${(props) => props.theme.DARK[700]};
  color: ${(props) => props.theme.LIGHT[100]};
  position: sticky;
  z-index: 2;
  top: 0;

  > header {
    width: 90%;
    margin: 0 auto;

    display: flex;
    align-items: center;

    > .logo {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin: 0 auto;
      text-decoration: none;

      > h1 {
        font-weight: 700;
        color: ${(props) => props.theme.LIGHT[200]};
      }
    }

    @media (max-width: 768px) {
      padding: 5.6rem 0 2.4rem;

      > button {
        background-color: transparent;
      }

      .search {
        margin: 0 auto;
        display: none;
      }

      .menuBurger {
        display: block;
        border: none;
      }

      .logo > img {
        width: 3rem;
      }

      > .logout,
      .btnRed {
        display: none !important;
      }
    }

    @media (min-width: 769px) {
      gap: 4rem;
      padding-block: 2.4rem;

      > .menuBurger {
        display: none !important;
      }

      > .logout {
        flex-shrink: 0;
      }

      > .logo {
        display: grid;
        grid-template-columns: 3.5rem max-content;
        row-gap: 0;

        > h1 {
          font-size: 4rem;
        }
      }

      .search {
        display: block;
      }
    }
  }
`
