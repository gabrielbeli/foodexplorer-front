import { forwardRef } from 'react'
import { InputContainer } from '../Input/styles'

export const Input = forwardRef(({ id, label, ...rest }, ref) => {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...rest} />
    </InputContainer>
  )
})

Input.displayName = 'Input'
