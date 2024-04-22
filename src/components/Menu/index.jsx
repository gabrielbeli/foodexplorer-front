import { MenuContainer, CloseButton } from './styles'

import { Search } from '../Search'
import { Footer } from '../Footer'
import { TextLink } from '../TextLink'
import close from '../../assets/close.svg'

import { useAuth } from '../../contexts/auth'
import { useState } from 'react'

export function Menu({ onCloseMenu, onSetSearch }) {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  function handleSignOut() {
    signOut()
  }

  function handleCloseMenu() {
    setIsOpen(false)
    onCloseMenu()
  }

  return (
    <MenuContainer $isOpen={isOpen}>
      <header>
        <CloseButton onClick={handleCloseMenu}>
          <img src={close} alt="botão para fechar o menu" />
        </CloseButton>
        <h2>Menu</h2>
      </header>
      <div className="menu-content">
        <Search onSetSearch={onSetSearch} />
        <ul>
          {user.isAdmin && (
            <li>
              <TextLink name="Novo prato" to={'/'} onClick={handleCloseMenu} />
            </li>
          )}
          {!user.isAdmin && (
            <>
              <li>
                <TextLink
                  name="Histórico de pedidos"
                  to="/requests"
                  onClick={handleCloseMenu}
                />
              </li>
              <li>
                <TextLink
                  name="Meus favoritos"
                  to="/favorites"
                  onClick={handleCloseMenu}
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
    </MenuContainer>
  )
}
