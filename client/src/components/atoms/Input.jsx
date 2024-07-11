
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
      <div className={`px-2.5 bg-white border-x-neutral-700 focus-within:bg-base-500 input 
      border-x-0 rounded	rounded-b-none shadow-md
      border-t-0 flex items-center gap-2 ${error ? "input-error" : "input-accent"}`}>
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