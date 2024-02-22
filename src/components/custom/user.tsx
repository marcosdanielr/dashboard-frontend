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

export const User = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex items-center justify-center cursor-pointer'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p className="text-sm ml-[0.478125rem]">
        Olá,{' '}
            <b>usuário</b>
          </p>
          <IoMdArrowDropdown className='mt-[0.18rem]' size="1.3rem" />
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-44 px-0 py-1">
        <ul>
          <li className='h-8 ml-3'>
            <b>usuário</b>
          </li>

          <div className='border-gray-200 w-full border-solid border-[0.0625rem]' />

          <li className='flex items-center gap-2 cursor-pointer text-sm font-medium h-8 ml-3'>
            <RiUser3Line />
            Perfil
          </li>


          <li className='flex items-center gap-2 cursor-pointer text-sm font-medium h-8 ml-3'>
            <PiGearBold />
            Configurações
          </li>


          <div className='border-gray-200 w-full border-solid border-[0.0625rem]' />

          <li className='flex items-center gap-2 cursor-pointer text-sm font-medium h-8 ml-3'>
            <RxExit />
            Sair
          </li>

        </ul>
      </PopoverContent>

    </Popover>
  )
}
