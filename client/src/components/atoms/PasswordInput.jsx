import { useState } from 'react'
import Input from './Input';
import ViewPassword from './ViewPassword';

const PasswordInput = ({ label, placeholder, register, error }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const handleClick = (e) => {
        e.preventDefault()
        setIsPasswordVisible(!isPasswordVisible)
        setPasswordType(isPasswordVisible ? "password" : "text")
    }

    return (
        <Input
            label={label}
            placeholder={placeholder}
            password
            passwordType={passwordType}
            register={register}
            error={error}
            viewPassword={
                <ViewPassword
                    isPasswordVisible={isPasswordVisible}
                    handleClick={handleClick}
                />}
        />
    )
}

export default PasswordInput