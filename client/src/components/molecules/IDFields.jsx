import { defaultRequireValidation } from "../../validations/commonFormValidation"
import Input from "../atoms/Input"
import Select from "../atoms/Select"

const documentsTypes = [
    { value: "DNI" }, { value: "CI" }, { value: "CIE" }, { value: "CM" },
    { value: "DNM" }, { value: "LC" }, { value: "LE" }, { value: "PAS" }
]


const IDfields = ({ registerType, registerID, error }) => {
    return (
        <div className="form-group mx-auto max-w-[310px]">
            <label className="label">
                <span className={`label-text text-poppins text-xl ${error && "text-error"}`}>
                    Tipo y N° de Documento
                </span>
            </label>

            <Select
                register={registerType}
                options={documentsTypes}
            >
                <Input
                    width={"auto"}
                    error={error}
                    register={registerID}
                    placeholder={"Número de documento"}
                />
            </Select>

            {
                error &&
                <label className="label mx-auto">
                    <span className="label-text-alt text-error">{error?.message}</span>
                </label>
            }
        </div>
    )
}

export default IDfields