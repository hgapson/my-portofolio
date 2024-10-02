// src/components/routes.tsx

import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from './Layout'
import Home from './HomePage/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '', element: <Home /> }],
  },
]

const router = createBrowserRouter(routes)

export default router
