import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Dashboard } from '../pages/dashboard'

const router = createBrowserRouter([
  {
    path: '/',
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
