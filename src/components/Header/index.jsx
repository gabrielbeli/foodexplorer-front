import { HeaderContainer } from './styles'
import menu from '../../assets/menu.svg'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Button } from '../Button'
import { FiShoppingCart, FiLogOut } from 'react-icons/fi'
import { Search } from '../Search'
import { useState, useEffect } from 'react'

export function Header() {
  const [showSearch, setShowSearch] = useState(true)

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

          {showSearch && <Search className="search" />}

          <Link>
            <Button className="btnRed" title="Pedidos" icon={FiShoppingCart} />
          </Link>

          <FiLogOut className="logout" onClick={''} />
        </>
      </header>
    </HeaderContainer>
  )
}
