import RegisterForm from '../molecules/RegisterForm'
import { Link } from "wouter"
import { useForm } from "react-hook-form"
import { transformRegisterPatient } from '../../utils/transformRegister'
import { fetchData } from '../../data/fetchData'
import roles from '../../data/roles'

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors, } } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    let userData;
    if (data.role === roles[0].value) {
      userData = transformRegisterPatient(data)
      console.log(userData);
    }

    // const response = await fetchData(`auth/register/${data.role}`, "POST", userData)
    // console.log(response);
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