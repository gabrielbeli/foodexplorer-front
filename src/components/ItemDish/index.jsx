import { useNavigate } from 'react-router-dom'
import { ItemDishContainer } from './styles'

export function ItemDish({
  quantity,
  name,
  amount,
  img,
  btnTitle,
  dishId,
  ...rest
}) {
  const navigate = useNavigate()

  function goToDish() {
    navigate(`/dish/${dishId}`)
  }

  return (
    <ItemDishContainer>
      <img src={img} alt={name} onClick={goToDish} />
      <div>
        <h2 onClick={goToDish}>
          {quantity && `${quantity} x -`} {name}{' '}
          {amount && (
            <small>
              {amount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </small>
          )}
        </h2>
        <button {...rest}>{btnTitle}</button>
      </div>
    </ItemDishContainer>
  )
}
