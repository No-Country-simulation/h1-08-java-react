
const Input = ({ icon, alt, textLabel, placeholder, password, register, error }) => {
  return (
    <div className="form-control w-full max-w-xs">
      {
        textLabel &&
        <label className="label">
          <span className="label-text">{textLabel}</span>
        </label>
      }

      {/* rounded-b-none  */}
      <div className={`px-2.5 bg-neutral border-x-neutral-700 focus-within:bg-base-300 input border-x-0	
      border-t-0 flex items-center gap-2 ${error ? "input-error" : "input-accent"}`}>
        {icon && <img src={icon} alt={alt} className="opacity-70" />}
        <input
          autoComplete="off"
          type={password ? "password" : "text"}
          {...register}
          placeholder={placeholder}
          className={"w-full"}
        />
      </div>

      <label className="label h-8">
        <span className="label-text-alt text-error">{error?.message}</span>
      </label>
    </div>
  )
}

export default Input