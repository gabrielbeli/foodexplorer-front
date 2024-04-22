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
      > span {
        color: ${(props) => props.theme.TINTS.CAKE[200]};
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    > .logout {
      font-size: 3rem;
    }

    > .request {
      text-decoration: none;
    }

    @media (max-width: 768px) {
      padding: 5.6rem 0 2.4rem;

      > button {
        background-color: transparent;
      }

      #receipt {
        background-color: transparent;
        position: relative;

        > svg {
          color: ${(props) => props.theme.LIGHT[100]};
          font-size: 3rem;
        }

        > span {
          color: ${(props) => props.theme.LIGHT[100]};
          background-color: ${(props) => props.theme.TINTS.TOMATO[200]};
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 0;

          width: 2rem;
          height: 2rem;
          border-radius: 50%;

          position: absolute;
          top: -1rem;
          right: -1rem;

          display: grid;
          place-content: center;
        }
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

      .menuBurger,
      > a:has(#receipt) {
        display: none !important;
      }

      > .logout {
        flex-shrink: 0;
      }

      > #buttons {
        display: flex;
        gap: 3rem;
        min-width: 14.5rem;
      }

      #new {
        flex-shrink: 0;
      }

      > .logo {
        display: grid;
        grid-template-columns: 3.5rem max-content;
        row-gap: 0;

        > h1 {
          font-size: 3rem;
        }
        > span {
          margin-top: -3px;
          grid-column-start: 2;
          justify-self: end;
        }
      }

      .search {
        display: block;
      }

      .request {
        width: 17.5rem;

        > .btnRed {
          padding-inline: 0;
          min-width: ${({ isAdmin }) => (isAdmin ? '12rem' : '7rem')};
        }
      }

      > svg {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
      }
    }
    @media (max-width: 769px) and (max-width: 810px) {
      > .logo {
        max-width: 8rem;
        > h1 {
          display: none;
        }
      }
    }

    @media (max-width: 1028px) {
      .buttons {
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
      }
    }
  }
`
