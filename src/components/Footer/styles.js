import styled from 'styled-components'

export const FooterContainer = styled.footer`
  grid-area: footer;
  background: ${(props) => props.theme.DARK[600]};
  height: 7.7rem;

  display: flex;

  > div {
    width: 90%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-around;

    > div {
      color: ${(props) => props.theme.LIGHT[700]};
      font-size: 2.5rem;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      > img {
        width: 3rem;
        filter: opacity(20%);
      }
    }

    > p {
      color: ${(props) => props.theme.LIGHT[600]};
      font-size: 1.5rem;
    }

    @media (max-width: 505px) {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      > div {
        font-size: 2rem;
        > img {
          width: 2rem;
        }
      }
    }
  }
`
