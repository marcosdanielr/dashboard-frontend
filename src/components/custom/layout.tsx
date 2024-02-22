import { ReactNode } from 'react'

import { Header } from './header'
import { Sidebar} from './sidebar'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full flex'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}
