import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware'


const useLanguageStore = createWithEqualityFn()(
    persist(
        (set) => ({
            currentLanguage: "es",
            handleLanguageChange: (event) => {
                const newLanguage = event.target.checked ? "en" : "es";
                set(() => ({ currentLanguage: newLanguage }))
            }
        }),
        {
            name: "language",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)

export default useLanguageStore