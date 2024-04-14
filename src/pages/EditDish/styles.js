import styled from 'styled-components'

export const EditDishContainer = styled.main`
  > .wrapper {
    padding: 3rem 3rem 0;

    > a {
      font-size: 2rem;
      color: ${(props) => props.theme.LIGHT[300]};
      text-decoration: none;
      display: flex;
      gap: 1rem;
    }
  }
  > main {
    padding: 3.2rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    font-weight: 500;
  }

  label {
    color: ${(props) => props.theme.LIGHT[400]};
  }

  .columns {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

    > .input-wrapper {
      > div {
        position: relative;
        background: ${(props) => props.theme.DARK[800]};

        padding: 1.2rem 0;
        border-radius: 0.8rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 4.8rem;

        > span {
          color: ${(props) => props.theme.LIGHT[100]};
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 500;

          display: flex;
          align-items: center;
          gap: 0.8rem;

          cursor: pointer;

          > svg {
            width: 2.4rem;
            height: 2.4rem;
          }
        }

        > div {
          position: absolute;
          inset: 0;
          opacity: 0;
          > label {
            display: none;
          }
        }
      }
    }

    > div:nth-child(2) {
      > input {
        height: 4.8rem;
        background: ${(props) => props.theme.DARK[800]};
      }
    }

    > div > select {
      background: ${(props) => props.theme.DARK[800]};
      color: ${(props) => props.theme.LIGHT[400]};

      border-radius: 5px;
      padding-left: 1.6rem;
      height: 4.8rem;

      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: center right 1.6rem;
      appearance: none;
      border: none;

      &:focus {
        outline: 2px solid ${(props) => props.theme.TINTS.CAKE[300]};
      }
    }
  }

  .columnTwo {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > div {
        background: ${(props) => props.theme.DARK[800]};

        min-height: 4.8rem;
        padding: 0.8rem;
        border-radius: 0.8rem;

        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;
      }
    }

    > div:last-child {
      gap: 1.6rem;

      > input {
        height: 4.8rem;
        background: ${(props) => props.theme.DARK[800]};
        color: ${(props) => props.theme.LIGHT[400]};
      }
    }
  }

  .textarea {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  > .buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  @media (min-width: 769px) {
    .columns {
      flex-direction: row;
      justify-content: space-between;
      gap: 3.2rem;

      > div {
        width: 100%;
      }

      > div:first-child {
        min-width: 184px;
        max-width: 229px;
      }
    }

    .columnTwo {
      flex-direction: row;

      > div:first-child {
        flex: 1;
      }
    }
  }

  @media (min-width: 769px) {
    padding: 0 1rem 1rem;

    > .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 4rem;
      margin-left: 50rem;
    }

    > #buttonRemove {
      width: 15rem;
      align-self: flex-end;
    }

    > #buttonAdd {
      width: 15rem;
      align-self: flex-end;
    }
  }
`

export const Textarea = styled.textarea`
  border-radius: 8px;
  height: 17.2rem;
  padding: 1.4rem;

  outline: none;
  border: none;
  resize: none;

  background: ${(props) => props.theme.DARK[800]};
  color: ${(props) => props.theme.LIGHT[400]};

  &::placeholder {
    color: ${(props) => props.theme.LIGHT[500]};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.TINTS.CAKE[300]};
  }
`
