import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import logo from '../../assets/logo.svg'

import { useAuth } from '../../contexts/auth'
import { useForm } from 'react-hook-form'

import { SignInContainer, Form } from './styles'

const signInSchema = zod.object({
  email: zod.string(),
  password: zod.string().min(6, 'Informe uma senha válida!'),
})

export function SignIn() {
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleSignIn(data) {
    await signIn({ email: data.email, password: data.password })
  }

  return (
    <SignInContainer>
      <h1>
        <img src={logo} alt="" />
        food explorer
      </h1>
      <Form onSubmit={handleSubmit(handleSignIn)}>
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
      </Form>
    </SignInContainer>
  )
}
