const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');

//pool: funciona para correr varios quarrys en paralelo
//conection: funciona para correr un quary a la vez, como un sql normal
var connection = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'scouts'
});

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/auth', function(req, res) {
	const user= req.query.Usuario;
	const password = req.query.Contraseña;
	const sqlSelect= "SELECT * FROM usuario WHERE Usuario = ? AND Contraseña = ?";
	if (user && password) {
		connection.query(sqlSelect, [user, password], function(error, results, fields) {
			if(results.length>0){
				res.send(results);
			}
		});
	}
});

app.post('/update-user-descripcion',function(req, res) {
	const about= req.body.params.about;
	const id = req.body.params.id;
	const sqlUpdate= "UPDATE usuario SET descripcion = ? WHERE idUsuario = ?";
	connection.query(sqlUpdate, [about, id], function(error, results, fields) {
		console.log(error);
	});
})

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});