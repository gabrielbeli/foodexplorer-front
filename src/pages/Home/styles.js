import styled from 'styled-components'

export const HomeContainer = styled.div`
  overflow: hidden;

  > main {
    margin-top: 6.2rem;
    padding: 0 0 2.5rem 0;
    padding-left: 5.5vw;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media (min-width: 769px) {
    > main {
      padding-left: 0;
      padding-bottom: 4.8rem;
      gap: 4.8rem;
    }
  }
`

export const Banner = styled.div`
  height: 12rem;
  width: 90%;
  margin: 4.4rem auto 0;
  background: ${(props) => props.theme.GRADIENTS[200]};
  border-radius: 3px;

  display: flex;
  justify-content: flex-end;
  position: relative;
  padding-right: 2rem;

  > picture {
    position: absolute;
    top: -3rem;
    left: -3rem;
    bottom: 0;
  }

  > div {
    font-family: 'Poppins', sans-serif;
    width: 21.5rem;
    padding-top: 3.6rem;

    > h2 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.5rem;
      margin-bottom: 3px;
    }

    > p {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
  }

  @media (max-width: 460px) {
    justify-content: center;
    align-items: center;

    > picture > img {
      display: none;
    }
    > div {
      padding-top: 0;
    }
  }

  @media (min-width: 769px) {
    height: 26rem;
    justify-content: space-between;
    margin-top: 17rem;

    > picture {
      position: static;
      overflow: hidden;
      margin-top: -13%;
      margin-left: -5%;
      width: 58%;
    }

    > div {
      width: 50%;
      padding-top: 8rem;

      > h2 {
        text-align: center;
        font-size: 4rem;
        margin-bottom: 1rem;
        line-height: 5rem;
      }

      > p {
        font-size: 1.4rem;
        line-height: 1.7rem;
        text-align: center;
      }
    }
  }
`
