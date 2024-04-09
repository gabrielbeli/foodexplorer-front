import { ButtonContainer } from './styles'

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <ButtonContainer {...rest}>
      {Icon && <Icon />}
      {title}
    </ButtonContainer>
  )
}
