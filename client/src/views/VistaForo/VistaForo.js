import React, {useState, useEffect} from "react";
// react plugin for creating charts
import Axios from 'axios';
// @material-ui/core
//import Typography from '@material-ui/core/Typography';
//import Button from "components/CustomButtons/Button.js";
//import { NavLink } from 'react-router-dom';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Typography from '@material-ui/core/Typography';
//import BugReport from "@material-ui/icons/BugReport";
//import Code from "@material-ui/icons/Code";
//import Cloud from "@material-ui/icons/Cloud";
// core components
//import Tabs from "components/CustomTabs/CustomTabs.js";
//import CardMedia from '@material-ui/core/CardMedia';
import { DiscussionEmbed } from 'disqus-react';
export default function VistaForo() {
const [forosPost,GetForosPost]=useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/get-Posts-unico', {params:{clave : window.post }}).then((response)=> {
            GetForosPost(response);
          })
        })



  return (
    <div>

    {

  forosPost.length!=0?forosPost.data.map((r,i)=>{
  return(
   <GridItem key={i}>
   <Card key={i}>
     <CardBody>
       <GridContainer justifyContent="center">
         <GridItem>
          <Typography variant="h2" gutterBottom>
      {r.titulo}
      </Typography>
           <img src={r.img} style={{maxHeight:800, maxWidth:800}}/>
         </GridItem>
         <GridItem  >
           <p>

           Tema del foro: {r.tema}<br/>
            {r.contenido}
           </p>
         </GridItem>

       </GridContainer>
     </CardBody>
   </Card>
   </GridItem>
  ); //return map
  }//llave del mapeo
) : ()=> {return (<h4> Todos los Foros </h4>)}}




        <DiscussionEmbed
            shortname='scoutsad'
            config={
                {
                    url: 'http://localhost:3000/user',
                    identifier: 'foros So',
                    title: 'Foros Sociales Titulo',
                    language: 'es_MX'
                }
            }
        />

    </div>
  );
}
