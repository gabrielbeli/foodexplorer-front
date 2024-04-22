import styled from 'styled-components'

export const DishContainer = styled.div`
  > .wrapper {
    padding: 3rem;

    > a {
      font-size: 2rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2.4rem 2rem;

  > img {
    margin: 0 auto;
    width: 26.4rem;
    height: 26.4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h2,
    > p {
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }

    > h2 {
      font-weight: 500;
      font-size: 4rem;
      margin-top: 1.6rem;
    }

    > p {
      font-size: 2rem;
      line-height: 2.2rem;
      max-width: 30rem;
      margin: 0 auto;
      text-align: justify;
    }

    > ul {
      columns: ${({ numberIngredients }) =>
        numberIngredients >= 3 ? 3 : numberIngredients};
      text-align: center;
      list-style: none;
      max-width: 30rem;
      margin: 0 auto;
      gap: 4rem;

      > li {
        margin-bottom: 1rem;
      }

      @media (max-width: 400px) {
        columns: 2;
      }
    }

    > div {
      display: grid;
      justify-items: center;
      grid-template-columns: ${({ isAdmin }) => (isAdmin ? '1fr' : '1fr 2fr')};
      max-width: 30rem;
      margin: 2rem auto;
      gap: 3rem;

      > a {
        width: 100%;
      }

      > a > button {
        font-size: 1rem;
        background: ${(props) => props.theme.TINTS.TOMATO[100]};
        display: flex;
        justify-content: center;
        width: 17.2rem;
        margin: 0 auto;
      }
    }

    @media (min-width: 769px) {
      flex-direction: row;
      gap: 6rem;

      > img {
        width: 60rem;
        height: 60rem;
      }

      > div {
        width: fit-content;
        align-items: flex-start;
        align-self: center;
        max-width: 666px;
        padding-right: 4rem;

        > h2 {
          font-size: 6rem;
          margin: 0;
        }

        > p {
          text-align: justify;
          font-size: 4rem;
          line-height: 3rem;
          max-width: none;
        }

        > ul {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;

          > li {
            margin-bottom: 0;
          }
        }

        > div > a > button {
          padding-inline: ${({ isAdmin }) => (isAdmin ? '2.4rem' : '0')};
          width: 17.4rem;
          align-items: flex-start;
        }
      }
    }
  }
`
