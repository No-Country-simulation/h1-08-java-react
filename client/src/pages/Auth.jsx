import React from 'react'
import Login from '../components/organisms/Login'
import Register from '../components/organisms/Register'

const Auth = ({ page }) => {
  if (page === "iniciar-sesion" || page === "login") return <Login />
  if (page === "registro" || page === "register") return <Register />

  else return <div>
    <h1>Página equivocada.</h1>
  </div> 

}

export default Auth