# Proyecto
Para correr el proyecto se necesita correr el front end y el backe end por separado

### Importante
Antes de poder front o back end, hacer los siguientes pasos:
- En la carpeta base del proyecto, en el cmd, correr el siguiente comando: npm install
- En la carpeta client del proyecto, en el cmd, correr el siguiente comando: npm install 

Cabe aclarar que es necesario tener Node js instalado en el dispositivo que va a correr.

## Backend
Para que el backend funcione tiene que existir una base de datos local llamada 'scout' con un usuario root y una contraseña de 1234 (para cambiar estos parametros modificar el archivo "server/index.js"). Para correrlo, seguir los siguientes pasos:

- Abrir el cmd en la carpeta base del proyecto
- Usar el comando "npm run devStart"

De haberlo hecho bien el programa iniciara con el mensaje "Server listening on ..." y el numero de puerto donde esta corriendo.

## Frontend
Para que el front end funcione con el back end, se necesita cambiar una variable en el "client/package.json" llamado "proxy". Se debe poner el URL junto con el puerto de donde esta corriendo el back end. al igual que hay una variable en "client/src/layouts/Login.js" llamada "window.backend" donde igual se tiene que poner el link del back end. Un ejemplo de como quedaria seria lo siguiente:
- En client/src/layouts/Login.js: window.backend = "http://54.166.177.90:8989"
- En client/package.json: "proxy": "http://54.166.177.90:8989"

Para correrlo seria de la siguiente manera:
- Abrir el cmd en la carpeta "client" del proyecto
- Usar el comando "npm start"

De haberlo hecho correctamente la aplicacion correra en el puerto 3000 del ip que se este utilizando. Ejemplo: https://3.87.231.73:3000/
