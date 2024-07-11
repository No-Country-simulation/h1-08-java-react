import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware'


const useAuthStore = createWithEqualityFn()(
    persist(
        (set, get) => ({
            isLogged: false,




            login: () => {
                console.log("hol");
                if (!get().isLogged) {
                    set(() => ({ isLogged: true }))
                }

            },
            logout: () => {
                if (get().isLogged) {
                    set(() => ({ isLogged: false }))
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