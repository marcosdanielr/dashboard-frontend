import { useNavigate } from 'react-router-dom'
import { User } from './user'

import logo from '@assets/icons/logo.svg'
import { RoutePathsEnum } from '@/constants/route-paths-enum'

export const Header = () => {
  const navigate = useNavigate()

  const handleGoToHomePage = () => {
    navigate(RoutePathsEnum.HOME)
  }

  return (
    <header 
      className='w-full h-[4.819375rem] px-5 bg-white drop-shadow flex justify-between items-center'
      onClick={handleGoToHomePage}
    >
      <img src={logo} alt="Flugo logo" className='cursor-pointer' /> 

      <User />
      
    </header>
  )
}
