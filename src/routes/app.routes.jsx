import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/newdish" element={<NewDish />} />
        <Route path="/editdish" element={<EditDish />} />
      </Route>
    </Routes>
  )
}