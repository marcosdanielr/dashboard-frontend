import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Dashboard } from '../pages/dashboard'
import { RoutePathsEnum } from '@/constants/route-paths-enum'

const router = createBrowserRouter([
  {
    path: RoutePathsEnum.HOME,
    element: <Dashboard />,
  },
  {
    path: '/test',
    element: <h2>Test</h2>,
  },
])


export function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
