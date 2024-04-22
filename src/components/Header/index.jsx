import { HeaderContainer } from './styles'

import { useAuth } from '../../contexts/auth'
import { useContextSelector } from 'use-context-selector'
import { PurchaseContext } from '../../contexts/purchase'

import menu from '../../assets/menu.svg'
import logo from '../../assets/logo.svg'

import { Button } from '../Button'
import { Search } from '../Search'
import { Menu } from '../Menu'
import { TextLink } from '../TextLink'

import { FiShoppingCart, FiLogOut } from 'react-icons/fi'
import { PiReceiptThin } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Header({ onSetSearch }) {
  const [showSearch, setShowSearch] = useState(window.innerWidth > 768)
  const [open, setOpen] = useState(false)
  const [totalItems, setTotalItems] = useState(0)

  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const { userRequests, userPurchases } = useContextSelector(
    PurchaseContext,
    ({ userRequests, userPurchases }) => ({ userRequests, userPurchases }),
  )

  const purchasesPending = userPurchases.filter(
    (purchase) => purchase.status === 'pending',
  )

  useEffect(() => {
    const handleResize = () => {
      setShowSearch(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleCloseMenu() {
    setOpen(false)
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  useEffect(() => {
    const total = userRequests.reduce(
      (accumulator, request) => accumulator + request.quantity,
      0,
    )

    setTotalItems(total)
  }, [userRequests])

  return (
    <HeaderContainer $isAdmin={user.isAdmin}>
      <header>
        <button className="menuBurger" onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu hamburger" />
        </button>
        <Menu onCloseMenu={handleCloseMenu} onSetSearch={onSetSearch} />
        <>
          <Link className="logo" to="/">
            <img src={logo} alt="Logo foodExplorer" />
            <h1>food explorer</h1>
            {user.isAdmin && <span>admin</span>}
          </Link>

          {showSearch && (
            <Search onSetSearch={onSetSearch} className="search" />
          )}

          {!user.isAdmin && (
            <div id="buttons">
              <TextLink
                name="Histórico de pedidos"
                to="/requests"
                id="historic"
              />
              <TextLink name="Meus favoritos" to="/favorites" id="fav" />
            </div>
          )}
          {user.isAdmin && <TextLink name="Novo prato" to="/new" id="new" />}

          <Link
            className="request"
            to={user.isAdmin ? '/requests' : '/payment'}
          >
            <Button
              className="btnRed"
              title={
                user.isAdmin
                  ? `Pedidos (${purchasesPending.length})`
                  : `(${totalItems})`
              }
              icon={user.isAdmin ? PiReceiptThin : FiShoppingCart}
            />
          </Link>

          <FiLogOut className="logout" onClick={handleSignOut} />
          <Link to={user.isAdmin ? '/requests' : '/payment'}>
            <button id="receipt">
              {user.isAdmin ? <PiReceiptThin /> : <FiShoppingCart />}
              <span>{user.isAdmin ? purchasesPending.length : totalItems}</span>
            </button>
          </Link>
        </>
      </header>
    </HeaderContainer>
  )
}
