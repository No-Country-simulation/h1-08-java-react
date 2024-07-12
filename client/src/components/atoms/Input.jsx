
const Input = ({ label, placeholder, password, register, error, viewPassword, passwordType }) => {
  return (
    <div className="form-control">
      {
        label &&
        <label className="label">
          <span className="label-text text-shadow text-xl">{label}</span>
        </label>
      }

      <div className={`px-2.5 focus-within:bg-fullWhite hover:bg-fullWhite bg-gray input w-[300px] mx-auto
      backdrop-blur-sm rounded rounded-b-none shadow-sm  content-center 
      ${error ? "border-error" : "border-x-0 border-t-0  border-magenta"} 
      ${error ? "shadow-error" : "shadow-magenta"}
      ${error ? "input-error" : "input-secondary"}
      ${password && "flex items-center"}
      `}
      >
        <input
          autoComplete="off"
          type={password ? passwordType : "text"}
          {...register}
          placeholder={placeholder}
          className={"w-full text-ellipsis overflow-hidden"}
        />
        {password && viewPassword}
      </div>

      {password &&
        <span className="label-text-alt text-textColor p-1">mayor a 8 caracteres</span>
      }
      {error && <label className="label">
        <span className="label-text-alt text-error">{error?.message}</span>
      </label>}
    </div>
  )
}

export default Input