import { api } from '../../services/api'
import { useAuth } from '../../contexts/auth'

import { DishContainer, Content } from './styles'

import { Link, useParams } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { PiReceiptThin } from 'react-icons/pi'

import placeHolder from '../../assets/photoPlaceholder.png'

import { Button } from '../../components/Button'
import { Counter } from '../../components/Counter'
import { Ingredients } from '../../components/Ingredients'

import { useState, useEffect } from 'react'
import { PurchaseContext } from '../../contexts/purchase'
import { useContextSelector } from 'use-context-selector'

export function Dish() {
  const [dish, setDish] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [inCart, setInCart] = useState(false)

  const { user } = useAuth()
  const { createRequest, userRequests } = useContextSelector(
    PurchaseContext,
    ({ createRequest, userRequests }) => ({ createRequest, userRequests }),
  )
  const { id } = useParams()

  const photoUrl = dish.photo
    ? `${api.defaults.baseURL}/files/${dish.photo}`
    : placeHolder

  async function handleRequest() {
    await createRequest({ quantity, dishId: dish.id })
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)

      setDish(response.data)
    }

    fetchDish()
  }, [id])

  useEffect(() => {
    const request = userRequests.find(
      (requests) => requests.dish_id === Number(id),
    )
    if (request) {
      setQuantity(request?.quantity)
      setInCart(true)
    } else {
      setInCart(false)
    }
  }, [userRequests, id])

  return (
    <DishContainer>
      <div className="wrapper">
        <a href="/" to={-1}>
          <FiChevronLeft /> Voltar
        </a>
      </div>

      <main>
        <Content
          $isAdmin={user.isAdmin}
          numberIngredients={dish.ingredients?.length}
          $inCart={inCart}
        >
          <img src={photoUrl} alt="" />

          <div>
            <h2>{dish.name}</h2>

            <p>{dish.description ? dish.description : ''}</p>

            <ul>
              {dish.ingredients &&
                dish.ingredients.map((ingredients) => (
                  <Ingredients
                    key={String(ingredients.id)}
                    name={ingredients.name}
                  />
                ))}
            </ul>

            <div>
              {!user.isAdmin && (
                <Counter quantity={quantity} setQuantity={setQuantity} />
              )}
              <Link to={user.isAdmin ? `/edit/${dish.id}` : `/dish/${dish.id}`}>
                <Button
                  onClick={user.isAdmin ? null : handleRequest}
                  title={
                    user.isAdmin
                      ? 'Editar prato'
                      : `${'incluir'} ∙ ${(
                          dish.price * quantity
                        ).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}`
                  }
                  icon={user.isAdmin ? undefined : PiReceiptThin}
                />
              </Link>
            </div>
          </div>
        </Content>
      </main>
    </DishContainer>
  )
}
