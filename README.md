# ToDo API desarrollada con node js y mongoDB

Una aplicacion backend REST API para manejar tareas para distintos usuarios. Cuenta con todas las operaciones CRUD para tareas y usuarios, registro y login para usuarios, autenticacion, posibilidad de subir una imagen de avatar.

Fue desarrollada utilizando:

* Node js
* Javascrip async/await promises jsonwebtoken
* Express
* Mongo DB, Mongoose
* Mongo DB Atlas  
* SendGrid API para envios de mail's
* Postman para las pruebas de los HTTP request a los endpoints tanto para entorno local como para produccion
* Heroku
* Test con Jtest, supertest

![](https://github.com/fernandezniko/task-manager-api/blob/master/public/img/2.PNG?raw=true)

La aplicacion se encuentra en el siguiente link: 
[Task-Manager-Api](https://fernandez-weather-application.herokuapp.com/)

## API Endpoint
| Metodo | Endpoint               | Descripcion   |
| ------ | ---------------------  | -------------- |
| POST   | /users                 | Registrar un nuevo usuario |
| POST   | /users/login           | Iniciar sesion |
| GET    | /users/me              | Obtener el perfil del usuario |
| PATCH  | /users/me              | Actualizar el perfil del usuario |
| DELETE | /users/me              | Eliminar la cuenta |
| POST   | /users/me/avatar            | Subir imagen de perfil |
| DELETE | /users/me/avatar            | Eliminar imagen de perfil |
| POST   | /tasks                 | Crear una nueva tarea |
| GET    | /tasks                 | Ver todas las tareas |
| GET    | /tasks/tid             | Obtener una tarea por su task id (tid) |
| GET    | /tasks/?completed=true             | Obtener las tareas completadas |
| GET    | /tasks/?completed=false            | Obtetener las tareas no completadas |
| GET    | /tasks/?limit=3&skip=3             | Limitar el resultado a 3 y obtener la segunda pagina |
| GET    | /tasks?sortBy=createdAt:asc        | Ordenar las tareas por orden ascendente de la fecha de creacion  |
| GET    | /tasks?sortBy=createdAt:desc       | Ordenar las tareas por orden descendente de la fecha de creacion |
| PATCH  | /tasks/tid             | Actualizar una tarea |
| DELETE | /tasks/tid             | Eliminar una tarea |
| POST   | /users/logout          | Cerrar sesion en una cuenta |
| POST   | /users/logoutall       | Cerrar sesion en todas las cuentas |
