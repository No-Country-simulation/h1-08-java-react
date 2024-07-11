import RegisterForm from '../molecules/RegisterForm'
import { Link } from "wouter"

const Register = () => {
  return (
    <div className="flex flex-col	justify-center items-center	my-10">
      <h1 className="">Registrate</h1>
      {/* w-9/12 */}
      <div className="flex flex-col gap-3 rounded-xl p-5 my-5">
        <RegisterForm />

        
        <div className="flex flex-col gap-5">
          <Link href="/auth/iniciar-sesion" className={"btn btn-neutral"}>Iniciar sesión</Link>
          <Link href="/" className={"link text-center"}>
            ¿Necesitas ayuda?
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Register