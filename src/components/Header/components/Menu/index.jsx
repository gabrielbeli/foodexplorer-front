import { MenuContent } from './styles'

import { Search } from '../Search'
import { Footer } from '../../../Footer'
import { TextLink } from '../../../TextLink'
import close from '../../../../assets/close.svg'

import { useAuth } from '../../../../contexts/auth'
import * as Dialog from '@radix-ui/react-dialog'

export function Menu({ onCloseMenu, onSetSearch }) {
  const { user, signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <Dialog.Root>
      <Dialog.Portal>
        <MenuContent>
          <header>
            <Dialog.Close asChild>
              <button>
                <img src={close} alt="botão para fechar o menu" />
              </button>
            </Dialog.Close>
            <Dialog.Title>Menu</Dialog.Title>
          </header>
          <div className="menu-content">
            <Search onSetSearch={onSetSearch} />
            <ul>
              {user.isAdmin && (
                <li>
                  <TextLink
                    name="Novo prato"
                    to="/newdish"
                    onClick={onCloseMenu}
                  />
                </li>
              )}
              {!user.isAdmin && (
                <>
                  <li>
                    <TextLink
                      name="Histórico de pedidos"
                      to="/requests"
                      onClick={onCloseMenu}
                    />
                  </li>
                  <li>
                    <TextLink
                      name="Meus favoritos"
                      to="/favorites"
                      onClick={onCloseMenu}
                    />
                  </li>
                </>
              )}
              <li>
                <TextLink name="Sair" to={'/'} onClick={handleSignOut} />
              </li>
            </ul>
          </div>
          <Footer />
        </MenuContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
