import RegisterForm from '../molecules/RegisterForm'
import { Link } from "wouter"
import { useForm } from "react-hook-form"

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors, } } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  })

  return (
    <div className="flex flex-col	justify-center items-center	py-10 font-poppins ">
      <h1 className="text-3xl font-semibold my-2">Regístrate</h1>

      <div className="flex flex-col gap-3 rounded-xl px-4 my-5">
        <RegisterForm
          register={register}
          onSubmit={onSubmit}
          watch={watch}
          errors={errors}
        />


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