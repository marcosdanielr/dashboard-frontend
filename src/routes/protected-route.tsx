import { ReactNode } from 'react'

import { useUser } from '@/hooks/use-user'

import { Login } from '@/pages/login'
import {Layout} from '../components/custom/layout'

type ProtectedRouteProps = {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {

  const { isAuthenticated } = useUser()

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <Layout>
      {children}
    </Layout>
  )
}
