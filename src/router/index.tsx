import { createBrowserRouter } from 'react-router-dom'

import Login from '../pages/Login'
import Layout from '../pages/Layout'
import Action from '../pages/Action'
import People from '../pages/People'
import Collect from '../pages/Collect'
import Message from '../pages/Message'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Message />
      },
      {
        path: '/action',
        element: <Action />
      },
      {
        path: '/people',
        element: <  People />
      },
      {
        path: '/collect',
        element: <Collect />
      },
      {
        path: '/message',
        element: <Message />
      }
    ],

  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router