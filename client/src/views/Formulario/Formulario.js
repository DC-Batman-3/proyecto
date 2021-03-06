import React, {useState, useEffect} from "react";
// react plugin for creating charts
//import { Redirect } from "react-router-dom";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Axios from 'axios';
import { Redirect } from "react-router-dom";
//import { DiscussionEmbed } from 'disqus-react';
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { TextField } from "@material-ui/core";
const useStyles = makeStyles(styles);
//import ReactDOM from "react-dom";
//import User from "layouts/User.js";
//import RTL from "layouts/RTL.js";


//import {Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.js";
const currencies = [
  {
    value: 1,
    label: ' ',
},
  {
    value: 2,
    label: 'Actividades',
  },
  {
    value: 1,
    label: 'Social',
}];


export default function Formulario() {

const [IdentificadorForo,setIdentificadorForo] = useState([]);
const [Descripcion,setDescripcion] = useState("");
const [Titulo,setTitulo] = useState([]);
const [Img,setImg] = useState([]);
const [Contenido,setContenido] = useState([]);
const [Tema,setTema] = useState([]);
const [Crear,setCrear] = useState(0);

useEffect(()=>{

if(Crear){
  Axios.post(window.backend+'/create-post', {params:{Titulo: Titulo, Descripcion: Descripcion, Img: Img,IdentificadorForo :IdentificadorForo, Tema : Tema , Contenido : Contenido , id: window.userSesion[0].idUsuario }})

}
if (Crear){
  {<Redirect to="/somewhere/else"/>}
  setCrear(0);
}
})


  const classes = useStyles();
  return (
    <div>
    <Grid container>
           <GridItem xs={12} sm={12} md={6}>
           <TextField
                    onChange={(e)=>{setTitulo(e.target.value)}}
                     id="standard-uncontrolled"
                     label="Titulo"
                     className={classes.textField}
                     margin="normal"
                   />
                    <TextField
                    onChange={(e)=>{setTema(e.target.value)}}
                    id="standard-uncontrolled"
                    label="Tema"
                    className={classes.textField}
                    margin="normal"
                              />
                              <TextField
                     id="Selector de tipo de foro"
                     select

                     label="Tipo de foro"
                     SelectProps={{
                       native: true,
                       MenuProps: {
                         className: classes.menu,
                       },
                     }}

                     helperText="Revise que sea el correcto"
                     margin="normal"


                    onChange={(event) =>{setIdentificadorForo(event.target.value)}}
                   >
                     {currencies.map(option => (
                       <option key={option.value} value={option.value}>
                         {option.label}

                       </option>
                     ))}

                   </TextField>
                 <Button onClick={()=>{setCrear(1)}}  type="button" color="success">Crear Foro</Button>

           </GridItem>
           </Grid>
          <TextField
           onChange={(event) =>{setDescripcion(event.target.value)}}
         id="Campo descricion"
        helperText="Escribe aqui una descripcion"
         label="Descripcion"
         multiline

         rows="4"
         margin="normal"
         />
         <TextField
          id="standard-uncontrolled"
           label="Link de la imagen a mostrar"
            onChange={(e)=>{setImg(e.target.value)}}
            fullWidth
           className={classes.textField}
           margin=""
                 />
            <TextField
             onChange={(e)=>{setContenido(e.target.value)}}
         id="Campo Contenido"
          helperText="Escribe aqui el contenido"
         label="Contenido"
         fullWidth
         multiline
         rows="37"
         margin="normal"
       />







    </div>
  );
}
