import { TextContainer } from './styles'

export function TextLink({ name, icon: Icon, ...rest }) {
  return (
    <TextContainer {...rest}>
      {Icon && <Icon />}
      {name}
    </TextContainer>
  )
}
