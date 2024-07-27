import RegisterForm from '../molecules/RegisterForm'
import { Link } from "wouter"
import { useForm } from "react-hook-form"
import { transformRegister } from '../../utils/transformAuth'
import { fetchData } from '../../data/fetchData'
import useAuthStore from '../../store/auth-store'
import { useState } from 'react'

const Register = () => {
  const MODE = import.meta.env.VITE_MODE
  const [messageErrors, setMessageErrors] = useState([])
  const { register, handleSubmit, watch, formState: { errors, } } = useForm()
  const login = useAuthStore(state => state.login)

  const onSubmit = handleSubmit(async (data) => {
    const validation = transformRegister(data)

    if (MODE != "only-front") {
      const response = await fetchData(`auth/register/${data.role}`, "POST", validation)
      if (!response.errors && !response.error) {
        console.log("TODO SALIO BIEN...");
        return login(response)
      }
      
      else if (response.errors) { setMessageErrors(response.errors) }
      else if (response.error) { setMessageErrors([response]) }
      console.log(response);
    }
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
        {
          messageErrors.length > 0 &&
          <ul className="list-decimal text-md w-fit mx-auto px-2 text-center">
            {
              messageErrors.map((error, index) => (
                <li key={index} className="text-error p-1 font-semibold">
                  {error.message}.
                </li>
              ))
            }
          </ul>
        }

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