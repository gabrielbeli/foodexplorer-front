import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import logo from '../../assets/logo.svg'

import { SignUpContainer, SignUpForm } from './styles'

export function SignUp() {
  return (
    <SignUpContainer>
      <h1>
        <img src={logo} alt="" />
        food explorer
      </h1>
      <SignUpForm onSubmit={''}>
        <h2>Crie sua conta</h2>
        <Input
          type="name"
          id="name"
          label="Nome"
          placeholder="Nome e sobrenome"
          required
        />
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

        <Button title="Cadastrar" />
        <a href="">Já tenho uma conta</a>
      </SignUpForm>
    </SignUpContainer>
  )
}
