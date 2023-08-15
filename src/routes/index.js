import * as React from "react";
import { useRoutes } from "react-router-dom";

import App from '../App';
import Test from '../pages/test'
import NotFound from '../pages/notfound'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
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