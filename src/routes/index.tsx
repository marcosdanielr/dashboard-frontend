import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>Home</h2>,
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
