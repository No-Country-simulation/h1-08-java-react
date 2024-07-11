import RegisterForm from '../molecules/RegisterForm'
import { Link } from "wouter"

const Register = () => {
  return (
    <div className="flex flex-col	justify-center items-center	my-10">
      <h1 className="">Registrate</h1>
      {/* w-9/12 */}
      <div className="flex flex-col gap-3 rounded-xl px-5 my-5">
        <RegisterForm />


        <div className="flex flex-col gap-5">
          <span>
            ¿Ya tienes una cuenta?
            <Link href="/auth/iniciar-sesion" className={"px-2 link"}>Iniciar sesión</Link>
          </span>

  
        </div>

      </div>
    </div>
  )
}

export default Register