import * as React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import App from '../App';
import Test from '../pages/test'
import NotFound from '../pages/notfound'
import Dashboard from '../pages/dashboard'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'test',
        element: <Test />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]

function Root() {
  return useRoutes(routes)
}

export default Root