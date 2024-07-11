
const Input = ({ label, placeholder, password, register, error }) => {
  return (
    <div className="form-control w-full">
      {
        label &&
        <label className="label">
          <span className="label-text text-lg">{label}</span>
        </label>
      }

      {/* rounded-b-none  */}
      <div className={`px-2.5 border-x-neutral-700 
      focus-within:bg-base-500 input 
      bg-light backdrop-blur-sm 
      border-x-0 rounded	rounded-b-none shadow-md shadow-orange
      border-t-0 border-orange
       flex items-center gap-2 ${error ? "input-error" : "input-orange"}`}>
        <input
          autoComplete="off"
          type={password ? "password" : "text"}
          {...register}
          placeholder={placeholder}
          className={"w-full text-ellipsis overflow-hidden"}
        />
      </div>
      {password &&
        <span className="label-text-alt text-error">mayor a 8 caracteres</span>
      }
      {error && <label className="label h-8">
        <span className="label-text-alt text-error">{error?.message}</span>
      </label>}
    </div>
  )
}

export default Input