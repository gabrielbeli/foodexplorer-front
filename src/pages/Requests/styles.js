import styled from 'styled-components'

export const RequestContainer = styled.main`
  padding: 2rem;
  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    line-height: 4.5rem;

    margin-bottom: 3.2rem;
    margin-left: 2rem;
  }

  table {
    display: none;
  }

  @media (min-width: 992px) {
    > table {
      display: table;
      border-collapse: collapse;
      width: 100%;

      thead {
        > tr {
          > th:first-child {
            border-radius: 1rem;
          }
        }
      }
    }
  }
`
