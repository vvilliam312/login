# login
First Do(npm install express sqlite3 body-parser)
Login project
1.	Databas
Gör en SQLite databas som heter login.db
Gör en tabell som heter users med columnerna id, username och password
Id: integer, PRIMARY KEY, AUTOINCREMENT
Username: text
Password: text
2.	HTML sida
Gör en html sida med 2 divs
Form som skickas med post 2st input= name=”username” ”type = text” och input name=”passw”s type=”password”
Div 1 ska ha en form med två text inputs och en submit knapp
Div 2 ska ha en knapp som man loggar ut me
3.	Server
Instalera express, sqlite3, body-parser, node(Kör npm install)
Gör en database.js som ”talar” med server.js (var sqlite 3 = require(’sqlite3’).verbose() ) 
Const DBSOURCE= ’login.db’;
Gör en route i server.js som heter userlogin
Adressen är Localhost/5555
Gör en post route som heter login som tar parametrarna username och password
App.post(’/login/:username/:password’  returnerar json med en variabel som heter id
Id variablen är en integer frår 0 och uppåt
Andvändaren och Lösenordet måst stämma 100% för att man ska få logga in(returnera userid)
Om userid är 0 så misslyckades inloggningen 
Om userid är större än 0 så lyckdes inlogginingen

