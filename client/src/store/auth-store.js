import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware'


const fakeUser = {
    id: 666,
    dni: 70000000,
    age: 24,
    birtDate: "2000-11-07",
    name: "Franco",
    lastName: "Maidana",
    role: "PATIENT",
    // role: "DOCTOR",
    gender: "MALE",
    email: "maidana@test.com",
}

const useAuthStore = createWithEqualityFn()(
    persist(
        (set, get) => ({
            isLogged: false,
            user: null,
            token: null,


            login: (data) => {

                if (!get().isLogged) {
                    set(() => ({
                        isLogged: true,
                        user: data?.user ?? fakeUser,
                        token: data?.token
                    }))
                }

            },
            logout: () => {
                if (get().isLogged) {
                    set(() => ({
                        isLogged: false,
                        user: null,
                        token: null
                    }))
                }
            }
        }),
        {
            name: "user",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)

export default useAuthStore