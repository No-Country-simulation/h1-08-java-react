import patient_es_routes from "./patient/es-routes.json"
import patient_en_routes from "./patient/en-routes.json"
import doctor_es_routes from "./doctor/es-routes.json"
import doctor_en_routes from "./doctor/en-routes.json"

export default class Navigation {
    #navigation = [];

    // ESPAÑOL
    #es_languages = Object.freeze(["español", "inglés"])
    #es_doctor_navigation = doctor_es_routes
    #es_patients_navigation = patient_es_routes
    #es_labs_navigation = Object.freeze([
        {
            path: "/",
            name: "tratamientos"
        },
        {
            path: "/",
            name: "notificaciones"
        },
        {
            path: "/",
            name: "pacientes"
        },
    ])
    #es_profile_navigation = Object.freeze([
        {
            path: "/mi-perfil",
            name: "perfil"
        },
        {
            path: "#",
            name: "ayuda"
        },
    ])

    // INGLÉS
    #en_languages = Object.freeze(["spanish", "english"])
    #en_doctor_navigation = doctor_en_routes
    #en_patients_navigation = patient_en_routes
    #en_labs_navigation = Object.freeze([
        {
            path: "/",
            name: "treatments"
        },
        {
            path: "/",
            name: "notifications"
        },
        {
            path: "/",
            name: "patients"
        },
    ])
    #en_profile_navigation = Object.freeze([
        {
            path: "/mi-perfil",
            name: "profile"
        },
        {
            path: "#",
            name: "help"
        },
    ])




    constructor(language) {
        if (language === "es") {
            this.#navigation = Object.freeze({
                doctor_navigation: this.#es_doctor_navigation,
                labs_navigation: this.#es_labs_navigation,
                patients_navigation: this.#es_patients_navigation,
                profile_navigation: this.#es_profile_navigation,
                languages: this.#es_languages,
            });
        } else if (language === "en") {
            this.#navigation = Object.freeze({
                doctor_navigation: this.#en_doctor_navigation,
                labs_navigation: this.#en_labs_navigation,
                patients_navigation: this.#en_patients_navigation,
                profile_navigation: this.#en_profile_navigation,
                languages: this.#en_languages,
            });
        }
    }

    getNavigation(role) {
        if (role === "doctor") return this.#navigation.doctor_navigation;
        if (role === "patient") return this.#navigation.patients_navigation;
        if (role === "lab") return this.#navigation.labs_navigation;
        return [];
    }

    getLanguages() {
        return this.#navigation.languages
    }

    getProfileNavigation() {
        return this.#navigation.profile_navigation
    }
}
