import { api } from '../../services/api'

import { FavoritesContainer } from './styles'
import photoPlaceholder from '../../assets/photoPlaceholder.png'

import { ItemDish } from '../../components/ItemDish'

import { useEffect, useState } from 'react'

export function Favorites() {
  const [favorites, setFavorites] = useState([])

  async function removeFavorite(id) {
    await api.delete(`/favorites/${id}`)

    setFavorites((prevState) =>
      prevState.filter((favorite) => favorite.id !== id),
    )
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get('/favorites')
      setFavorites(response.data)
    }

    fetchFavorites()
  }, [])

  return (
    <FavoritesContainer>
      <h2>Meus Favorites</h2>

      <ul>
        {favorites.map((favorite) => (
          <li key={String(favorite.id)}>
            <ItemDish
              img={
                favorite.photo
                  ? `${api.defaults.baseURL}/files/${favorite.photo}`
                  : photoPlaceholder
              }
              name={favorite.name}
              btnTitle="Remover dos Favoritos"
              dishId={favorite.dish_id}
              onClick={() => removeFavorite(favorite.id)}
            />
          </li>
        ))}
      </ul>
    </FavoritesContainer>
  )
}
