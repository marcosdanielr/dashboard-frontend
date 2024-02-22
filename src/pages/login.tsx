import { PasswordInput } from '@/components/custom/password-input'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

import logo from '@assets/icons/logo.svg'

export const Login = () => {
  return (
    <div className='bg-background flex items-center justify-center w-full h-screen'>

      <div className='bg-white flex flex-col items-center justify-center px-[4.25rem] py-8 gap-7 rounded-[0.5rem]'>
        <img src={logo} alt="Flugo logo" />

        <form className='w-[24rem] flex flex-col items-center justify-center gap-7'>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" placeholder="E-mail" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Senha</Label>
            <PasswordInput id="password" placeholder="Senha" />
          </div>

          <Button type='submit' variant='linear'>Entrar</Button>
        </form>

      </div>

    </div>
  )
}
