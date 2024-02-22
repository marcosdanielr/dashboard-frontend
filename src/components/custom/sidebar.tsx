import { useLocation, useNavigate } from 'react-router-dom'

import { RoutePathsEnum } from '@/constants/route-paths-enum'

import { MdAdminPanelSettings, MdAttachMoney, MdDashboard } from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'

export const Sidebar = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const options = [
    {
      title: 'Dashboard',
      icon: MdDashboard,
      path: RoutePathsEnum.HOME,
      onClick: () => navigate(RoutePathsEnum.HOME)
    },
    {
      title: 'Clientes',
      icon: HiUsers,
      path: RoutePathsEnum.CLIENTS,
      onClick: () => navigate(RoutePathsEnum.CLIENTS)
    },
    {
      title: 'Financeiro',
      icon: MdAttachMoney,
      path: RoutePathsEnum.FINANCIAL,
      onClick: () => navigate(RoutePathsEnum.FINANCIAL)
    },
    {
      title: 'Painel administrativo',
      icon: MdAdminPanelSettings,
      path: RoutePathsEnum.ADMINISTRATIVE_PANEL, 
      onClick: () => navigate(RoutePathsEnum.ADMINISTRATIVE_PANEL)
    },
  ]



  return (
    <aside className='flex flex-col w-64 h-[calc(100vh-4.819375rem)] bg-white'>

      <ul className='flex flex-col gap-6'>
        {
          options.map(option => (
            <li 
              key={option.title}
              onClick={option.onClick}
              className={`cursor-pointer flex items-center font-medium text-[0.9375rem] ${location.pathname === option.path && 'text-primary'}`} 
            >
              <option.icon size='1.5rem'/>

              {option.title}
            </li>
          ))
        }
      </ul>


    </aside>
  )
} 
