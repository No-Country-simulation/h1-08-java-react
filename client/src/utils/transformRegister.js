


export function transformRegisterPatient(obj) {
    const {
        name: nombre,
        lastName: apellido,
        document_id: dni,
        email,
        birthdate: fechaNacimiento,
        phone: telefono,
        password
    } = obj;

    return {
        nombre, apellido, dni, email, fechaNacimiento, telefono, password
    }

}


/* 
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