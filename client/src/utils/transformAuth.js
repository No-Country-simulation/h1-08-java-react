
import roles from "../data/roles";

export function transformLogin(data) {
    let validation;
    if (data.role === roles[0].value) {
        validation = {
            dni: data.document_id,
            password: data.password
        }
    } else if (data.role === roles[1].value) {
        validation = {
            doctor: data.doctorValidation,
            password: data.password
        }
    }
    return validation
}


export function transformRegisterPatient(data) {
    const {
        name: nombre,
        lastName: apellido,
        document_id: dni,
        email,
        birthdate: fechaNacimiento,
        phone: telefono,
        password
    } = data;

    return {
        nombre, apellido, dni, email, fechaNacimiento, telefono, password
    }

}

export function transformRegister(data) {
    let validation;
    if (data.role === roles[0].value) {
        validation = transformRegisterPatient(data)
    } else if (data.role === roles[1].value) {

    }
    return validation
}



/*  CAMPO ESPERADO PARA REGISTRO DE PACIENTE
        "nombre": "KfI'fFItgb'ya C uqJE",
        "apellido": "uHyDcL'wxAA'zKhIwGSb",
        "dni": "stringst",
        "email": "string",
        "address": {
            "country": "string",
            "province": "Pu UTOtqVLvAqJLtWa pdUMFKdKvaC",
            "city": "VgECXXFmYeNIJwtbCFVJrpuDKsJjqHqtmjXVwcWLOSqpFWtGAT",
            "street": "XCKo vBrMMLPJGSuEZdFbZeiTvN B gXsfGkoLJVMJxFdzQUpb"
        },
        "fechaNacimiento": "2024-07-23",
        "telefono": "stringstri",
        "password": "stringst"
*/