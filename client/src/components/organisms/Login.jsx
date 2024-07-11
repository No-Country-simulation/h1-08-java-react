import { useForm } from 'react-hook-form'
import LoginForm from '../molecules/LoginForm'
import { Link } from "wouter"
import useAuthStore from '../../store/auth-store'

const Login = () => {
  const { register, handleSubmit, formState: { errors, } } = useForm()
  const login = useAuthStore(state => state.login)

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    login()
  })

  return (
    <div className="flex flex-col	justify-center items-center	my-10">
      <img src="/logo-text.webp" width={"300px"} height={"251px"} alt="logo-justina.io-icon" />
      <div className="flex flex-col w-96 gap-3 rounded-xl p-5 my-5">

        <LoginForm
          register={register}
          errors={errors}
          onSubmit={onSubmit}
        />

        <div className="flex flex-col gap-5">
          <Link href="/auth/registro" className={"btn btn-neutral"}>Registrarme</Link>

        </div>

      </div>

    </div>
  )
}

export default Login