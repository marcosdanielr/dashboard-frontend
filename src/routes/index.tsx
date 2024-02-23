import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import {Layout} from '../components/custom/layout'

import { RoutePathsEnum } from '@/constants/route-paths-enum'
import { Login } from '@/pages/login'
import { Dashboard } from '@/pages/dashboard'

const router = createBrowserRouter([
  {
    path: RoutePathsEnum.HOME,
    element:
    <Layout>
      <Dashboard />
    </Layout>
  },
])


export function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
