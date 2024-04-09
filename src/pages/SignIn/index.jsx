import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import logo from '../../assets/logo.svg'

import { SignInContainer, SignInForm } from './styles'

export function SignIn() {
  return (
    <SignInContainer>
      <h1>
        <img src={logo} alt="" />
        food explorer
      </h1>
      <SignInForm onSubmit={''}>
        <h2>Faça o login</h2>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="exemplo@email.com"
          required
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          minlenght="6"
          required
        />

        <Button title="Entrar" />
        <a href="">Criar uma conta</a>
      </SignInForm>
    </SignInContainer>
  )
}
