// FOR MODE: only-front

const fakeUser = {
    id: 666,
    dni: 70000000,
    age: 24,
    birthdate: "2000-11-07",
    name: "Franco",
    lastName: "Maidana",
    role: "ROLE_DOCTOR",
    gender: "MALE",
    email: "maidana@test.com",
    address: {
        country: "sin especificar",
        province: "sin especificar",
        city: "sin especificar",
        street: "sin especificar"
    },
}

export const fakePatient = {
    id: 666,
    dni: 70000000,
    age: 24,
    birthdate: "2000-11-07",
    name: "Franco",
    lastName: "Maidana",
    role: "ROLE_PATIENT",
    gender: "MALE",
    email: "maidana@test.com",
    address: {
        country: "sin especificar",
        province: "sin especificar",
        city: "sin especificar",
        street: "sin especificar"
    },
    imc: 25.6
}


export default fakeUser;
