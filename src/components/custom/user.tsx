import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { IoMdArrowDropdown } from 'react-icons/io'

import { RiUser3Line } from 'react-icons/ri'
import { PiGearBold } from 'react-icons/pi'
import { RxExit } from 'react-icons/rx'
import { Separator } from '../ui/separator'
import { useUser } from '@/hooks/use-user'
import { UserIcon } from 'lucide-react'

export const User = () => {
  const { currentUser, signOut } = useUser()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex items-center justify-center cursor-pointer'>
          <Avatar>
            <AvatarImage src={currentUser?.photoURL ?? ''} />
            <AvatarFallback>
              <UserIcon />
            </AvatarFallback>
          </Avatar>

          <p className="text-sm ml-[0.478125rem]">
        Olá,{' '}
            <b>{currentUser?.displayName ?? 'usuário'}</b>
          </p>
          <IoMdArrowDropdown className='mt-[0.18rem]' size="1.3rem" />
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-44 px-0 py-1">
        <ul>
          <li className='h-8 ml-3'>
            <b>{currentUser?.displayName ?? 'usuário'}</b>
          </li>
          <Separator />

          <li className='flex items-center gap-2 cursor-pointer text-sm font-medium h-8 ml-3'>
            <RiUser3Line />
            Perfil
          </li>


          <li className='flex items-center gap-2 cursor-pointer text-sm font-medium h-8 ml-3'>
            <PiGearBold />
            Configurações
          </li>


          <Separator />

          <li 
            className='flex items-center gap-2 cursor-pointer text-sm font-medium h-8 ml-3'
            onClick={signOut}
          >
            <RxExit />
            Sair
          </li>

        </ul>
      </PopoverContent>

    </Popover>
  )
}
