import { DishContainer, Content } from './styles'

import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { PiReceiptThin } from 'react-icons/pi'

import placeHolder from '../../assets/photoPlaceholder.png'

import { Button } from '../../components/Button'
import { Counter } from '../../components/Counter'
import { useState } from 'react'

export function Dish() {
  const [quantity, setQuantity] = useState(1)

  return (
    <DishContainer>
      <div className="wrapper">
        <a href="/">
          <FiChevronLeft /> Voltar
        </a>
      </div>

      <main>
        <Content>
          <img src={placeHolder} alt="" />

          <div>
            <h2>Batata triste</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              similique enim magnam omnis numquam cupiditate earum o
            </p>

            <ul>
              <li>batata</li>
              <li>sal</li>
              <li>lagrima</li>
            </ul>

            <div>
              <Counter quantity={quantity} setQuantity={setQuantity} />
              <Link to="#">
                <Button title="Incluir" icon={PiReceiptThin} />
              </Link>
            </div>
          </div>
        </Content>
      </main>
    </DishContainer>
  )
}
