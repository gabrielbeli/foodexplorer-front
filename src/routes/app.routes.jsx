import { Routes, Route } from 'react-router-dom'

import { useAuth } from '../contexts/auth'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Favorites } from '../pages/Favorites'
import { Requests } from '../pages/Requests'
import { DefaultLayout } from '../styles/DefaultLayout'
import { PurchaseProvider } from '../contexts/purchase'

export function AppRoutes() {
  const { user } = useAuth()

  return (
    <PurchaseProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dish/:id" element={<Dish />} />
          <Route path="/requests" element={<Requests />} />

          {user.isAdmin && <Route path="/newdish" element={<NewDish />} />}
          {user.isAdmin && <Route path="/editd/:id" element={<EditDish />} />}
          {!user.isAdmin && <Route path="/favorites" element={<Favorites />} />}
        </Route>
      </Routes>
    </PurchaseProvider>
  )
}
