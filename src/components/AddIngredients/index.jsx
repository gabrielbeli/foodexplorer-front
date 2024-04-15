import { FiX, FiPlus } from 'react-icons/fi'

import { AddIngredientsContainer } from './styles'

export function AddIngredients({ isNew = false, onClick, size, ...rest }) {
  return (
    <AddIngredientsContainer isNew={isNew}>
      <input
        type="text"
        size={size}
        readOnly={!isNew}
        placeholder="Adicionar"
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </AddIngredientsContainer>
  )
}
