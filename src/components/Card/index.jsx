import { CardContainer } from './styles'
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
/* import Edit from '../../assets/pencil.svg' */
import Photoplace from '../../assets/photoPlaceholder.png'
import { Counter } from '../Counter'
import { Button } from '../Button'
import { useState } from 'react'

export function Card() {
  const [quantity, setQuantity] = useState(1)

  return (
    <CardContainer>
      <button>
        <FiHeart className="fav" />
      </button>
      <Link to="/dish">
        <img src={Photoplace} alt="icone de um lapis" />
        <h3>Batat Triste</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span>20,00</span>
      </Link>
      <div>
        <Counter quantity={quantity} setQuantity={setQuantity} />
        <Button title="Incluir" onClick={''} />
      </div>
    </CardContainer>
  )
}
