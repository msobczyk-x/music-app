import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from '@utils/store'
import { Provider } from 'react-redux'
import { createBrowserRouter,
RouterProvider, } from 'react-router-dom'
import HomePage  from '@pages/HomePage/HomePage'
import ErrorPage  from '@pages/ErrorPage'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
  ]);
  


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
