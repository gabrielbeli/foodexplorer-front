import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Favorites } from '../pages/Favorites'
import { DefaultLayout } from '../styles/DefaultLayout'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/newdish" element={<NewDish />} />
        <Route path="/editdish" element={<EditDish />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  )
}
