import { HeaderContainer } from './styles'

import { useAuth } from '../../contexts/auth'
import { useContextSelector } from 'use-context-selector'
import { PurchaseContext } from '../../contexts/purchase'

import menu from '../../assets/menu.svg'
import logo from '../../assets/logo.svg'

import { Button } from '../Button'
import { Search } from './components/Search'
import { Menu } from './components/Menu'
import { TextLink } from '../TextLink'

import { FiShoppingCart, FiLogOut } from 'react-icons/fi'
import { PiReceiptThin } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'

export function Header({ onSetSearch }) {
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
        <Dialog.Root open={open} onOpenChange={() => setOpen(!open)}>
          <Dialog.Trigger asChild>
            <button id="menuBurger">
              <img src={menu} alt="menu hamburger" />
            </button>
          </Dialog.Trigger>
          <Menu onCloseMenu={handleCloseMenu} onSetSearch={onSetSearch} />
        </Dialog.Root>
        <>
          <Link id="logo" to="/">
            <img src={logo} alt="Logo foodExplorer" />
            <h1>food explorer</h1>
            {user.isAdmin && <span>admin</span>}
          </Link>

          <Search onSetSearch={onSetSearch} id="search" />

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
          {user.isAdmin && (
            <TextLink name="Novo prato" to="/newdish" id="new" />
          )}

          <Link id="request" to={user.isAdmin ? '/requests' : '/payment'}>
            <Button
              id="btnRed"
              title={
                user.isAdmin
                  ? `Pedidos (${purchasesPending.length})`
                  : `(${totalItems})`
              }
              icon={user.isAdmin ? PiReceiptThin : FiShoppingCart}
            />
          </Link>

          <FiLogOut id="logout" onClick={handleSignOut} />
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
