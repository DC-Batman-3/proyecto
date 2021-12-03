import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


import { DiscussionEmbed } from 'disqus-react';
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(styles);
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.js";
const currencies = [
  {
    value: 'Actividades',
    label: 'Actividades',
  },
  {
    value: 'Social',
    label: 'Social',
}];


export default function Formulario() {
  const classes = useStyles();
  return (
    <div>
    <Grid container>
           <GridItem xs={12} sm={12} md={6}>
           <TextField
                     id="standard-uncontrolled"
                     label="Titulo"

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
                   >
                     {currencies.map(option => (
                       <option key={option.value} value={option.value}>
                         {option.label}
                       </option>
                     ))}
                   </TextField>
                 <Button type="button" color="success">Crear Foro</Button>
           </GridItem>


           </Grid>


          <TextField
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
            fullWidth
           className={classes.textField}
           margin=""
                 />

            <TextField
         id="Campo Contenido"
          helperText="Escribe aqui el contenido"
         label="Contenido"
         fullWidth
         multiline
         rows="37"
         margin="normal"
       />


        <DiscussionEmbed
            shortname='scoutsad'
            config={
                {
                    url: 'http://localhost:3000/user/foros-sociales',
                    identifier: 'foros Sosciales ID',
                    title: 'Foros Sociales Titulo',
                    language: 'es_MX'
                }
            }
        />

    </div>
  );
}
