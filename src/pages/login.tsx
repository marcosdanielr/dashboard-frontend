import { useState } from 'react'
import { useUser } from '@/hooks/use-user'

import { PasswordInput } from '@/components/custom/password-input'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

import { SubmitHandler, useForm } from 'react-hook-form'

import logo from '@assets/icons/logo.svg'

type FormData = {
  email: string
  password: string
};

export const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { register, handleSubmit } = useForm<FormData>()
  const { signIn } = useUser()

  const handleSignIn: SubmitHandler<FormData> = (data): void => {
    const { email, password } = data

    setIsLoading(true)

    signIn(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  return (
    <div className='bg-background flex items-center justify-center w-full h-screen'>

      <div className='bg-white flex flex-col items-center justify-center px-[4.25rem] py-8 gap-7 rounded-[0.5rem]'>
        <img src={logo} className='select-none' alt="Flugo logo" />

        <form className='w-[24rem] flex flex-col items-center justify-center gap-7' onSubmit={handleSubmit(handleSignIn)}>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" placeholder="Insira o seu e-mail" required {...register('email')} />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Senha</Label>
            <PasswordInput id="password" placeholder="Insira a sua senha" required {...register('password')} />
          </div>

          <Button type='submit' variant='linear' isLoading={isLoading}>Entrar</Button>
        </form>

      </div>

    </div>
  )
}
