import React from 'react'
import Login from '../components/organisms/Login'
import Register from '../components/organisms/Register'
import useAuthStore from '../store/auth-store'
import { shallow } from 'zustand/shallow'

const Auth = ({ page }) => {
  const isLogged = useAuthStore((state => state.isLogged), shallow)

  if ((page === "iniciar-sesion" || page === "login") && !isLogged) {
    return <Login />
  }
  if ((page === "registrarme" || page === "register") && !isLogged) {
    return <Register />
  }
  
  if (isLogged) return <h1>Ya estás logueado.</h1>

  else return <div>
    <h1>Página equivocada.</h1>
  </div>

}

export default Auth