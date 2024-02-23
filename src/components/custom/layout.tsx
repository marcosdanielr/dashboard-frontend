import { ReactNode } from 'react'

import { Header } from './header'
import { Sidebar} from './sidebar'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full relative'>
      <Header />
      <div className='w-full flex'>
        <Sidebar />
        <div className='w-full ml-64 mt-[4.819375rem]'>
          {children}
        </div>
      </div>
    </div>
  )
}
