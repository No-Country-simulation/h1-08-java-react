import { useForm } from "react-hook-form"
import LoginForm from "../molecules/LoginForm"
import { Link } from "wouter"
import useAuthStore from "../../store/auth-store"
import { useState } from "react"
import { fetchData } from "../../data/fetchData"
import { transformLogin } from "../../utils/transformAuth"

const Login = () => {
  const MODE = import.meta.env.VITE_MODE

  const [messageErrors, setMessageErrors] = useState([])

  const { register, handleSubmit, watch, formState: { errors, } } = useForm()
  const login = useAuthStore(state => state.login)

  const onSubmit = handleSubmit(async (data) => {
    const validation = transformLogin(data)

    if (MODE != "only-front") {
      const response = await fetchData(`auth/login/${data.role}`, "POST", validation)
      if (!response.errors && !response.error) {
        console.log("TODO SALIO BIEN...");
        return login(response)
      }

      else if (response.errors) { setMessageErrors(response.errors) }
      else if (response.error.toString().includes("Bad credentials")) { setMessageErrors([{ message: "Usuario y/o contraseña incorrectos." }]) }
      else if (response.error) { setMessageErrors([response]) }
      console.log(response);
    } else {
      login()
    }

  })

  return (
    <div className="flex flex-col	justify-center items-center	my-10">
      <img src="/logo-text.webp" width={"300px"} height={"251px"} alt="logo-justina.io-icon" />
      <div className="flex flex-col w-96 gap-3 rounded-xl p-5 my-5">

        <LoginForm
          watch={watch}
          register={register}
          errors={errors}
          messageErrors={messageErrors}
          onSubmit={onSubmit}
        />

        <div className="flex flex-col gap-5">
          <Link href="/auth/registrarme" className={"btn btn-outline text-magenta border-magenta hover:text-accent hover:border-accent hover:bg-transparent"}>Registrarme</Link>

        </div>

      </div>

    </div>
  )
}

export default Login