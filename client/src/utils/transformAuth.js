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
            licenseNumber: data.doctorValidation,
            password: data.password
        }
    }
    return validation
}

// ACTUALIZADO POR ULTIMA VERSION DE BACKEND - PROXIMAMENTE PODRIAMOS NO NECESITAR ESTA FUNCION
export function transformDefaultFieldsRegister(data) {
    const {
        name,
        lastName,
        document_id: dni,
        email,
        birthdate,
        phone: phoneNumber,
        password
    } = data;

    return {
        name, lastName, dni, email, birthdate, phoneNumber, password,
        address: {
            "country": "sin especificar",
            "province": "sin especificar",
            "city": "sin especificar",
            "street": "sin especificar",
        }
    }
}

export function transformDoctorFieldsRegister(data) {
    const { doctorValidation, speciality: idSpeciality } = data
    return {
        doctor: {
            speciality: {
                id: idSpeciality
            },
            licenceNumber: doctorValidation
        }
    }
}


export function transformRegister(data) {
    let validation = transformDefaultFieldsRegister(data)

    if (data.role === roles[1].value) {
        validation = {
            ...validation,
            ...transformDoctorFieldsRegister(data)
        }
    }
    return validation
}
