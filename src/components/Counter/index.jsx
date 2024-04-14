import { FiMinus, FiPlus } from 'react-icons/fi'
import { CounterContainer } from './styles'

export function Counter({ quantity, setQuantity }) {
  function handleDecrement() {
    if (quantity > 1) {
      setQuantity((prevState) => --prevState)
    }
  }

  function handleIncrement() {
    if (quantity < 99) {
      setQuantity((prevState) => ++prevState)
    }
  }

  return (
    <CounterContainer>
      <button onClick={handleDecrement}>
        <FiMinus />
      </button>
      {String(quantity).padStart(2, '0')}
      <button onClick={handleIncrement}>
        <FiPlus />
      </button>
    </CounterContainer>
  )
}
