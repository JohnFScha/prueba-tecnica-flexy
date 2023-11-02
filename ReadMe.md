# Flexy Register

## Objetivo del proyecto

Prueba técnica para la app Flexy.

Desarrollar un front de acuerdo al maquetado pasado por Figma

Maquetado:

### Version Desktop

<img src="./src/assets/prototypes/Registrate-Agente-Desktop.jpg" width="75%">

### Version Responsive

<img src="./src/assets/prototypes/Registrate-Agente-Mobile.jpg" width="25%">

## Boilerplate del proyecto

El boilerplate de este proyecto se creó utilizando Vite (https://vitejs.dev), y sus comandos son los proporcionados por la herramienta.

Para correr el proyecto en el localHost, primero es necesario instalar las dependencias con `install` y luego correrlo con el comando `run dev`.

## Características del proyecto

Este proyecto esta desarrollado con React y consta de una vista de Login, con un componente que se encarga tanto de gestionar el ingreso como el registro de un nuevo agente.

Dado que este proyecto no cuenta con un backend real, para simular una base de datos se utiliza el sessionStorage del navegador, por lo que se puede "registrar" un usuario, y luego se puede loguear ese usuario con las mismas credenciales.

## Comportamiento esperado

- Validación de Inputs: Los inputs cuentan con validaciones propias. Si no se cumplen estas condiciones, aparecerá un mensaje de error.

- Validación del Formulario: El botón del formulario no se activará hasta que no se complete toda la info necesaria y no existan errores en la misma.

- Al registrarse correctamente, se disparará un modal, dando la bienvenida al usuario, pero al no tener una pagina de inicio, no habrá una redirección. El usuario se guardará en un array de usuarios que simula la base de datos y se guardará en el sessionStorage del navegador.

- Al loguearse correctamente, se disparará el mismo modal (con otro texto); al existir problemas con el login, el modal informará al usuario del problema.

- "Recuperar Contraseña" dispara un modal donde el usuario puede escribir su correo, con la intención de enviar luego un codigo de recuperación a su casilla.

## Tecnologías utilizadas

El proyecto utiliza:

- Bootstrap: principalmente para la gestión del display y responsiveness. Los componentes se desarrollaron manualmente, para una mayor flexibilidad de estilo.

- Zustand: para la gestión de estados globales. Se utilizó solamente para la autorización simulada y la lógica de los modales.

## Estructura del proyecto

### Componentes

- Vista de Login: contiene los demas componentes de la app.

- LoginWidget: Se encarga de renderizar el widget para loguearse o registrarse o recuperar la contraseña. Dentro de el se encuentran los StyledInputs.

- StyledInputs: Son inputs componentizados a los que se aplica el estilo indicado en el maquetado de Figma.

- UploadWidget: Es un input estilado tal como se indica en el maquetado de Figma. Su función es recibir un archivo del usuario, y convertirlo a base64 para poder guardarse con el resto de la info del usuario en el sessionStorage, ademas de poder mostrarlo en el formulario.

- InfoModal: Es un modal cuyo único fin es indicar algo al usuario, dando unicamente la opción de "continuar".

- ForgotPassModal: Es un modal cuyo fin es que el usuario pueda completar con su dirección de correo para enviar un mensaje de recuperación de contraseña al mismo.

### Utils

Utils es una carpeta con archivos que guardan funciones que pueden ser útiles a lo largo del proyecto, a medida que este crezca.

### Hooks

Hooks guarda los hooks personalizados que funcionan como Store de la aplicación, gracias a Zustand.
