import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from '@utils/store'
import { Provider } from 'react-redux'
import { createBrowserRouter,
RouterProvider, } from 'react-router-dom'
import HomePage  from '@pages/HomePage/HomePage'
import ErrorPage  from '@pages/ErrorPage'
import {LoginPage, LoginTypeEnum}  from '@pages/LoginPage/LoginPage'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import GuestGuard from '@guards/GuestGuard'
import AuthGuard from './guards/AuthGuard'
import PlayerDashboard from './pages/PlayerDashboard/PlayerDashboard'
import SetupApi from './pages/SetupApiKey/SetupApi'

const persistor = persistStore(store);
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: ( <GuestGuard><LoginPage active={LoginTypeEnum.login} /> </GuestGuard>),
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: ( <GuestGuard><LoginPage active={LoginTypeEnum.signup} /> </GuestGuard>),
      errorElement: <ErrorPage />,  
    },
    {
      path: "/player",
      element: ( <AuthGuard><PlayerDashboard /> </AuthGuard>),
      errorElement: <ErrorPage />,
    },
    {
      path: "/setup-api-key",
      element: ( <AuthGuard><SetupApi /> </AuthGuard>),
    }

  ]);
  


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
);
