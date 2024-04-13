import { HeaderContainer } from './styles'

import menu from '../../assets/menu.svg'
import logo from '../../assets/logo.svg'

import { Button } from '../Button'
import { Search } from '../Search'

import { Menu } from '../Menu'

import { FiShoppingCart, FiLogOut } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const [showSearch, setShowSearch] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setShowSearch(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <HeaderContainer>
      <header>
        <button className="menuBurger">
          <img src={menu} alt="menu hamburger" />
        </button>
        <>
          <Link className="logo" to="/">
            <img src={logo} alt="Logo foodExplorer" />
            <h1>food explorer</h1>
          </Link>

          {showSearch && window.innerWidth > 768 && (
            <Search className="search" />
          )}

          <Link className="request">
            <Button
              className="btnRed"
              title={`Pedidos (0)`}
              icon={FiShoppingCart}
            />
          </Link>

          <FiLogOut className="logout" onClick={''} />
        </>
      </header>
    </HeaderContainer>
  )
}
