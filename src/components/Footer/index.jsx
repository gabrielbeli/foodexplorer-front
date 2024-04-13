import { FooterContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Footer() {
  return (
    <FooterContainer>
      <div className="logofooter">
        <div>
          <img src={logo} alt="logo foodexplorer" />
          food explorer
        </div>
        <p>
          <span>© 2024 -</span> Todos os direitos reservados.
        </p>
      </div>
    </FooterContainer>
  )
}
