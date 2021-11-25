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

app.post('/update-user',function(req, res) {
	const about= req.body.params.about;
	const id = req.body.params.id;
	const img = req.body.params.imagen;
	var sqlUpdate= "";
	if(about != null){
		sqlUpdate = "UPDATE usuario SET descripcion = ? WHERE idUsuario = ?"
		connection.query(sqlUpdate, [about, id]);
	}
	if(img != null){
		sqlUpdate = "UPDATE usuario SET img = ? WHERE idUsuario = ?"
		connection.query(sqlUpdate, [img, id]);
	}
	
})

app.get('/get-foro',function(req, res) {
	const sqlSelect= "SELECT * FROM foro";
	connection.query(sqlSelect, function(error, results, fields) {
		res.send(results);
	});
})

app.get('/get-secciones',function(req, res) {
	const sqlSelect= "SELECT seccion FROM usuario GROUP BY seccion";
	connection.query(sqlSelect, function(error, results, fields) {
		res.send(results);
	});
})

app.get('/get-resultados-foro',function(req, res) {
	const clave= req.query.Clave.toLowerCase();
	const tipo=req.query.Tipo;
	var resultados = [];
	var sqlSelect= "SELECT p.idUsuario, p.idForo, p.descripcion, p.img, u.idUsuario, u.NombreCompleto, f.idForo, f.tipoDeForo FROM post p LEFT JOIN usuario u ON p.idUsuario = u.idUsuario LEFT JOIN foro f on p.idForo=f.idForo";
		if(clave){
			if(tipo!=0){
				sqlSelect= "SELECT p.idUsuario, p.idForo, p.descripcion, p.img, u.idUsuario, u.NombreCompleto, f.idForo, f.tipoDeForo FROM post p LEFT JOIN usuario u ON p.idUsuario = u.idUsuario LEFT JOIN foro f on p.idForo=f.idForo WHERE p.idForo = ?";
				connection.query(sqlSelect, [tipo],function(error, results, fields) {
					results.forEach(function(item){
						if(item.descripcion.toLowerCase().includes(clave) || item.NombreCompleto.toLowerCase().includes(clave))
							resultados.push(item);
					})
					res.send(resultados);
				})
			}else{
				connection.query(sqlSelect, function(error, results, fields) {
					results.forEach(function(item){
						if(item.descripcion.toLowerCase().includes(clave) || item.NombreCompleto.toLowerCase().includes(clave))
							resultados.push(item);
					})
					res.send(resultados);
				})
			}
		};
})

app.get('/get-resultados-personas',function(req, res) {
	const clave= req.query.Clave.toLowerCase();
	const seccion = req.query.Seccion;
	var resultados = [];
	var sqlSelect= "SELECT idUsuario, NombreCompleto, numTropa, seccion FROM usuario";
	if (clave) {
		if(seccion!=0){
			sqlSelect= "SELECT idUsuario, NombreCompleto, numTropa, seccion FROM usuario WHERE seccion = ?";
			connection.query(sqlSelect, [seccion], function(error, results, fields) {
				if(results.length>0){
					results.forEach(function(item){
						if(item.NombreCompleto.toLowerCase().includes(clave))
							resultados.push(item);
					})
					res.send(resultados);
				}
			});
		}else connection.query(sqlSelect, function(error, results, fields) {
			if(results.length>0){
				results.forEach(function(item){
					if(item.NombreCompleto.toLowerCase().includes(clave))
						resultados.push(item);
				})
				res.send(resultados);
			}
		});
	}
})

app.get('/get-user-info', function(req, res) {
	const idUser= req.query.ID;
	const sqlSelect= "SELECT NombreCompleto, numTropa, seccion, descripcion, img FROM usuario WHERE idUsuario = ?";
	connection.query(sqlSelect, [idUser], function(error, results, fields) {
		console.log(results)
		if(results.length>0){
			res.send(results);
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});