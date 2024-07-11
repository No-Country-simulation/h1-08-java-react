import RegisterForm from '../molecules/RegisterForm'
import { Link } from "wouter"

const Register = () => {
  return (
    <div className="flex flex-col	justify-center items-center	my-10">
      <h1 className="">Registrate</h1>
      {/* w-9/12 */}
      <div className="flex flex-col gap-3 rounded-xl px-5 my-5">
        <RegisterForm />


        <div className="flex gap-2 items-center text-sm justify-center my-2">
          <span>
            ¿Ya tienes una cuenta?
          </span>
            <Link href="/auth/iniciar-sesion" className={"link text-accent"}>Iniciar sesión</Link>

  
        </div>

      </div>
    </div>
  )
}

export default Register