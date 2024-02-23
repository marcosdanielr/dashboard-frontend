import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { RoutePathsEnum } from '@/constants/route-paths-enum'
import { ProtectedRoute } from './protected-route'
import { Dashboard } from '@/pages/dashboard'

const router = createBrowserRouter([
  {
    path: RoutePathsEnum.HOME,
    element: 
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  },
])


export function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
