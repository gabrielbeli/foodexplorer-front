import { api } from '../../services/api'
import { useAuth } from '../../contexts/auth'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'

import logo from '../../assets/logo.svg'

import { SignUpContainer, SignUpForm } from './styles'

export function SignUp() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm()

  async function handleSignUp(data) {
    const { name, email, password } = data

    try {
      await api.post('/users', { name, email, password })

      toast.success('Cadastro realizado com sucesso!')
      await signIn({ email, password })
      navigate('/')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível cadastrar')
      }
    }
  }

  return (
    <SignUpContainer>
      <h1>
        <img src={logo} alt="" />
        food explorer
      </h1>
      <SignUpForm onSubmit={handleSubmit(handleSignUp)}>
        <h2>Crie sua conta</h2>

        <Input
          type="name"
          id="name"
          label="Nome"
          placeholder="Nome e sobrenome"
          required
          {...register('name', { required: 'Por favor, insira seu nome' })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="exemplo@email.com"
          required
          {...register('email', {
            required: 'Por favor, insira seu email',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Email inválido',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          minlenght="6"
          required
          {...register('password', {
            required: 'Por favor, insira sua senha',
            minLength: {
              value: 6,
              message: 'A senha deve ter no mínimo 6 dígitos',
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <Button title="Cadastrar" disabled={isSubmitting} />
        <TextLink name="Já tenho uma conta" to={-1} />
      </SignUpForm>
    </SignUpContainer>
  )
}
