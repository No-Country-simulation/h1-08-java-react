export default class Navigation {
    #navigation = [];

    #es_doctor_navigation = Object.freeze([
        {
            path: "/",
            name: "turnos"
        },
        {
            path: "/",
            name: "calendario"
        },
        {
            path: "/",
            name: "pacientes"
        },
    ]);

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
    ]);

    #es_patients_navigation = Object.freeze([
        {
            path: "/",
            name: "próximos turnos"
        },
        {
            path: "/",
            name: "calendario"
        },
        {
            path: "/",
            name: "tratamiento",
            sub_menu: true,
            sub_items: [
                {
                    path: "/",
                    name: "medicación",
                },
                {
                    path: "/",
                    name: "nutrición",
                },
                {
                    path: "/",
                    name: "actividad física",
                },
            ]
        },
        {
            path: "/",
            name: "prepaga",
        },
    ]);

    #en_doctor_navigation = Object.freeze([
        {
            path: "/",
            name: "appointments"
        },
        {
            path: "/",
            name: "calendar"
        },
        {
            path: "/",
            name: "patients"
        },
    ]);

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
    ]);

    #en_patients_navigation = Object.freeze([
        {
            path: "/",
            name: "upcoming appointments"
        },
        {
            path: "/",
            name: "calendar"
        },
        {
            path: "/",
            name: "treatment",
            sub_menu: true,
            sub_items: [
                {
                    path: "/",
                    name: "medication",
                },
                {
                    path: "/",
                    name: "nutrition",
                },
                {
                    path: "/",
                    name: "physical activity",
                },
            ]
        },
        {
            path: "/",
            name: "insurance",
        },
    ]);

    #es_profile_navigation = Object.freeze([
        {
            path: "/",
            name: "perfil"
        },
        {
            path: "/",
            name: "configuraciones"
        },
    ])
    #en_profile_navigation = Object.freeze([
        {
            path: "/",
            name: "profile"
        },
        {
            path: "/",
            name: "settings"
        },
    ])

    #es_languages = Object.freeze(["español", "inglés"])
    #en_languages = Object.freeze(["spanish", "english"])



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
