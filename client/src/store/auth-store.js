import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware'


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
                        user: data?.user,
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