import { User } from './user'

import logo from '@assets/icons/logo.svg'

export const Header = () => {
  return (
    <div className='w-full h-[4.819375rem] px-5 bg-white flex justify-between items-center'>
      <img src={logo} alt="Flugo logo" className='cursor-pointer' /> 

      <User />
      
    </div>
  )
}
