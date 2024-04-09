import styled from 'styled-components'

export const SignUpContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
  > h1 {
    color: ${(props) => props.theme.LIGHT[100]};
    font-size: 3.5rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  @media (min-width: 769px) {
    padding: 0 7vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12rem;

    > h1 {
      margin: 0 auto;
      font-size: 3.5rem;
    }
  }

  @media (max-width: 768px) {
    padding-top: 16vh;
  }
`
export const SignUpForm = styled.div`
  margin: 0 auto;
  padding: 4rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 50rem;

  a {
    margin: 0 auto;
    color: ${(props) => props.theme.LIGHT[100]};
    text-decoration: none;
  }

  > h2 {
    display: none;
  }

  @media (min-width: 769px) {
    min-width: 476px;
    margin: 0;
    background: ${(props) => props.theme.DARK[700]};
    h2 {
      display: block;
      text-align: center;
      font-size: 3rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }
  }
`
