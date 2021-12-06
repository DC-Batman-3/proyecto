import React from "react";
// react plugin for creating charts

// @material-ui/core
import Typography from '@material-ui/core/Typography';

import CardMedia from '@material-ui/core/CardMedia';
import { DiscussionEmbed } from 'disqus-react';



export default function VistaForo() {

  return (
    <div>
    <Typography component="h2" variant="h1" gutterBottom>
        titulo
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
               Autor
             </Typography>
        <CardMedia
                 component="img"
                 image="https://www.imagen.com.mx/assets/img/imagen_share.png"//aqui imagen
               />

               <Typography variant="body1" gutterBottom>
                       body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                       unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                       dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                     </Typography>   
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
