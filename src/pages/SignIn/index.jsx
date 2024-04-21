import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'

import logo from '../../assets/logo.svg'

import { useAuth } from '../../contexts/auth'
import { useForm } from 'react-hook-form'

import { SignInContainer, SignInForm } from './styles'

export function SignIn() {
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleSignIn(data) {
    if (!data.email || !data.password) {
      console.log('Por favor, preencha todos os campos.')
      return
    }

    if (data.password.length < 6) {
      console.log('Informe uma senha válida com no mínimo 6 caracteres.')
      return
    }

    await signIn({ email: data.email, password: data.password })
  }

  return (
    <SignInContainer>
      <h1>
        <img src={logo} alt="" />
        food explorer
      </h1>
      <SignInForm onSubmit={handleSubmit(handleSignIn)}>
        <h2>Faça o login</h2>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="exemplo@email.com"
          required
          {...register('email')}
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          minlenght="6"
          required
          {...register('password')}
        />

        <Button title="Entrar" disabled={isSubmitting} />
        <TextLink name="Criar uma conta" to="/register" />
      </SignInForm>
    </SignInContainer>
  )
}
