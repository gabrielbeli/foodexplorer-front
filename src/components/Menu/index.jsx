import { MenuContainer } from './styles'
import { Search } from '../Search'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer'
import close from '../../assets/close.svg'
import { useState } from 'react'

export function Menu() {
  const [isOpen, setIsOpen] = useState(true)

  function handleCloseMenu() {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <MenuContainer>
          <header>
            <button onClick={handleCloseMenu}>
              <img src={close} alt="botão para fechar o menu" />
              Menu
            </button>
          </header>
          <div className="menu-content">
            <Search />
            <ul>
              <li>
                <Link name="Sair" to={'/'} onClick={''}>
                  Sair
                </Link>
              </li>
            </ul>
          </div>
          <Footer />
        </MenuContainer>
      )}
    </>
  )
}
