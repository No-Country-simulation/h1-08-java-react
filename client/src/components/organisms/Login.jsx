import LoginForm from '../molecules/LoginForm'
import { Link } from "wouter"

const Login = () => {
  return (
    <div className="flex flex-col	justify-center items-center	my-10">
      <h1 className="">Iniciar Sesión</h1>

      <div className="flex flex-col w-80 gap-3 rounded-xl ps-5 my-10">

        <LoginForm />

        <div className="flex flex-col gap-5">
          <Link href="/auth/registro" className={"btn btn-neutral"}>Registrarme</Link>
          <Link href="/" className={"link text-center"}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Login