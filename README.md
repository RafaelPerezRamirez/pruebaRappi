# Siponsis
Desarrollo de una web app que consume de manera local un json que se monta sobre un servidor js.
Todo el desarrollo se hizo a mano.

# Tecnologías
-PHP
-HTML
-CSS
-JAVASCRIPT
-NODE JS

# Instalación
1.-Instalar Node JS de manera global https://nodejs.org/es/download/
2.-Montar toda la carpeta del proyecto sobre un servidor apache (ex. Wamp, Mamp, Xamp)
3.-Dirigirse por consola a la carpeta llamada "pruebaRappi"
4.-Correr el comando $ npm install
5.-Correr el comando $ node server.js
NOTA El paso 4 y 5 se hacen con el fin de montar el archivo news_mock.json sobre una url local
6.-En todo caso que el server se inicialice en un puerto diferente al 3000 dirigirse al archivo /templates/main.php y en la linea 3 realizar el cambio de puerto correspondiente

# Cambio de url
Para cambiar la url del endpoint local a uno externo, basta con cambiar la dirección de la linea 3
en /templates/main.php
