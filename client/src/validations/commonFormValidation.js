export const defaultRequireValidation = Object.freeze({
   required: {
      value: true,
      message: "Este campo es requerido."
   }
})

export const phoneValidation = Object.freeze({
   ...defaultRequireValidation,
   minLength: {
      value: 8,
      message: "Debe contener al menos 8 caracteres."
   },
   maxLength: {
      value: 14,
      message: "Debe contener como máximo 14 caracteres."
   },
})

export const usernameValidation = Object.freeze({
   ...defaultRequireValidation,
   minLength: {
      value: 6,
      message: "Debe contener al menos 6 caracteres."
   },
   maxLength: {
      value: 30,
      message: "Debe contener como máximo 30 caracteres."
   },
})

export const passwordValidation = Object.freeze({
   ...defaultRequireValidation,
   minLength: {
      value: 8,
      message: "Debe contener al menos 8 caracteres."
   },
   pattern: {
      value: /^(?:(?!.*(.)\1{2}).)*$/,
      message: "No se permiten 3 caracteres iguales consecutivos."
   },
   pattern: {
      value: /^(?=.*[a-z])/,
      message: "Debe contener al menos una letra minúscula."
   },
   pattern: {
      value: /^(?=.*[A-Z])/,
      message: "Debe contener al menos una letra mayúscula."
   },
   pattern: {
      value: /^(?=.*[@$!%*?&])/,
      message: "Debe contener al menos un carácter especial. Por ejemplo: '@', '$', '!', '%', '*', '?', '&'."
   }
})

export const confirmPasswordValidation = (watch) => ({
   ...passwordValidation,
   validate: (value) => {
      if (watch("password") != value) return "Las contraseñas no coinciden"
   }
})

export const emailValidation = Object.freeze({
   ...defaultRequireValidation,
   minLength: {
      value: 6,
      message: "Debe contener al menos 6 caracteres."
   },
   pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?!mil$)([a-zA-Z]{2,4}|gob|edu|biz)$/,
      message: "Incluye un signo '@' y '.' en la dirección de correo electrónico. Ej: 'correo@dominio.com'. No se permiten dominios '.mil'."
   }
})

export const namesValidation = Object.freeze({
   ...defaultRequireValidation,
   maxLength: {
      value: 20,
      message: "Debe contener como máximo 20 caracteres."
   }, minLength: {
      value: 3,
      message: "Debe contener al menos 3 caracteres."
   },
   pattern: {
      value: /^[a-zA-ZñÑ´¨' -]*$/,
      message: "Solo se permiten letras, espacios y los siguientes caracteres especiales: ´¨' - ñ Ñ."
   }
})