# ![Justina.io Logo](https://raw.githubusercontent.com/No-Country-simulation/h1-08-java-react/dev-maidana/client/public/logo.webp)

## Descripción

Justina.io es una aplicación diseñada para facilitar la gestión de información médica tanto para pacientes como para profesionales de la salud. Esta plataforma permite a los usuarios acceder y gestionar sus datos médicos, como vacunas, medicamentos, historial clínico y más.

### Participantes

- **Frontend:** 
    - [Franco Maidana](https://github.com/Maidana0/) 
    - [Gabriela Patiño](https://github.com/Gabyp05/) 


## Estructura del Proyecto

```bash
client/
└── src/
    ├── assets/
    ├── components/
    ├── data/
    ├── hooks/
    ├── layout/
    ├── locales/
    ├── pages/
    ├── routes/
    ├── store/
    ├── utils/
    ├── validations/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── tailwind.config.js
```

La estructura del proyecto sigue la metodología de diseño atómico (Atomic Design) para la organización de componentes.


## Tecnologías Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/) (18.3.1)
  - [React Hook Form](https://react-hook-form.com/) (7.52.1)
  - [Wouter](https://github.com/molefrog/wouter) (3.3.1)
  - [Zustand](https://zustand-demo.pmnd.rs/) (4.5.4)
  - [Tailwind CSS](https://tailwindcss.com/) (3.4.4)
  - [DaisyUI](https://daisyui.com/) (4.12.10)
  - [React DayPicker](https://daypicker.dev/) (9.0.4)
  - [React Country Region Selector](https://github.com/country-regions/react-country-region-selector/) (3.6.1)

- **Otros:**
  - [Vite](https://vitejs.dev/) (5.3.1) - Herramienta de construcción rápida.
  - [ESLint](https://eslint.org/) (8.57.0) - Linter para JavaScript.

## Scripts

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila la aplicación para producción.
- `lint`: Ejecuta ESLint para verificar el código.
- `preview`: Vista previa del build de producción.



## Validaciones de Formularios

Se utilizan varias validaciones para asegurar la integridad y consistencia de los datos ingresados en los formularios. A continuación, se detallan algunas de las validaciones más importantes:

- **Campo requerido**: Todos los campos críticos están marcados como obligatorios.
- **Documento de identidad**: Entre 6 y 20 caracteres, solo letras y números. (DNI, CI, etc.)
- **Teléfono**: Entre 10 y 15 dígitos.
- **Nombre de usuario**: Entre 6 y 30 caracteres.
- **Contraseña**:
  - Mínimo 8 caracteres.
  - Al menos una letra minúscula, una letra mayúscula y un carácter especial.
  - No permite tres caracteres iguales consecutivos.
- **Correo electrónico**: Formato válido con dominio permitido.



## Rutas del Rol de Paciente

| Ruta                   | Nombre                      | Desarrollada           |
|------------------------|-----------------------------|--------------------|
| `/mis-vacunas`         | Vacunas                     | Si                 |
| `/mis-medicamentos`    | Medicamentos                | Si                 |
| `/historial-clinico`   | Historial Clínico           | Sí                 |
| `/mis-patologias`      | - Mis Patologías            | Sí                 |
| `/mis-datos-de-salud`  | - Mis Datos de Salud        | Sí                 |
| `/credenciales`                    | - Credenciales y Carnets    | No                 |
| `/informes-y-resultados` | - Informes y Resultados    | Sí                 |
| `/fechas`                    | Fechas                      | No                 |



## Instalación y Configuración

1. Clona el repositorio.
2. Instala las dependencias con `npm install` o `yarn install`.
3. Ejecuta el servidor de desarrollo con `npm run dev` o `yarn dev`.
4. Abre tu navegador y visita `http://localhost:3001` para ver la aplicación en funcionamiento.

## Licencia
---
```