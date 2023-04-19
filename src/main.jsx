import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './components/Loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SignUp from './components/SignUp/SignUp';
import AuthProviders from './providers/AuthProviders';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Shop />
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
