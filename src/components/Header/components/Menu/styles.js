import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const MenuContent = styled(Dialog.Content)`
  background: ${(props) => props.theme.DARK[400]};
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 3;

  .hide {
    display: none !important;
  }

  > header {
    background: ${(props) => props.theme.DARK[700]};
    padding: 6rem 2.8rem 2.8rem;
    height: 11.4rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    button {
      background: transparent;
    }

    > h2 {
      font-size: 2.5rem;
    }
  }

  > .menu-content {
    width: 75%;
    margin: 0 auto 0;
    background: ${(props) => props.theme.DARK[400]};
    height: 100%;
    height: calc(100vh - 18.2rem);
    padding-top: 3.6rem;

    > div {
      margin-bottom: 3.6rem;
    }

    > ul {
      list-style: none;

      > li {
        border-bottom: 1px solid ${(props) => props.theme.DARK[1000]};

        > a {
          width: fit-content;
          font-size: 2rem;
          font-weight: 300;
          padding: 1rem;
          text-decoration: none;

          &:not(:hover) {
            color: ${(props) => props.theme.LIGHT[300]};
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`
