import React, {useState, useEffect} from "react";
// react plugin for creating charts
import Axios from 'axios';
// @material-ui/core
// @material-ui/icons
//import Button from "components/CustomButtons/Button.js";
import { NavLink } from 'react-router-dom';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tabs from "components/CustomTabs/CustomTabs.js";
import { DiscussionEmbed } from 'disqus-react';

//import ReactDOM from "react-dom";

window.post=0;
export default function Dashboard() {
const [forosPost,GetForosPost]=useState([]);
////const rootElement = document.getElementById("root");
//

  useEffect(()=>{
      Axios.get('http://localhost:3001/get-Posts', {params:{clave : 1 }}).then((response)=> {
          GetForosPost(response);
        })
      })

  return (
    <div>

        <NavLink to="/user/Formulario">Crear un Nuevo Foro</NavLink>



  <h4> Todos los Foros </h4>
      <Tabs
          title="Ordenar:"
          headerColor="success"
          tabs={[
            {
              tabName: "Todos los Foros",
              tabIcon: BugReport,
              tabContent: (

  forosPost.length!=0?forosPost.data.map((r,i)=>{
   return(

     <GridItem xs={12} sm={6} md={6} key={i}>
     <Card key={i}>
       <CardBody>
         <GridContainer justifyContent="center">
           <GridItem xs={12} sm={12} md={4} >
             <img src={r.img} style={{maxHeight:184, maxWidth:184}}/>
           </GridItem>
           <GridItem xs={12} sm={12} md={8} >
             <p>
             {r.titulo}<br/>
             Tipo de foro: {r.tema}<br/>

             Descripcion: {r.descripcion}
             </p>
           </GridItem>
           <GridItem xs={6} sm={12} md={3}>

            <NavLink to="/user/Vista-Foro" onClick={()=>{window.post=r.idPost}} >ver</NavLink>
           </GridItem>
         </GridContainer>
       </CardBody>
     </Card>
     </GridItem>
   ); //return map
 }//llave del mapeo
) : ()=> {return (<h4> Todos los Foros </h4>)})


            },
            {
              tabName: "Mas nuevo",
              tabIcon: Code,
              tabContent: (

  forosPost.length!=0?forosPost.data.reverse().map((r,i)=>{
   return(
     <GridItem xs={12} sm={6} md={6} key={i}>
     <Card key={i}>
       <CardBody>
         <GridContainer justifyContent="center">
           <GridItem xs={12} sm={12} md={4} >
             <img src={r.img} style={{maxHeight:184, maxWidth:184}}/>
           </GridItem>
           <GridItem xs={12} sm={12} md={8} >
             <p>
             {r.titulo},<br/>
             Tipo de foro: {r.tema},<br/>
             Descripcion: {r.descripcion}
             </p>
           </GridItem>
           <GridItem xs={6} sm={12} md={3}>
               <NavLink to="/user/Vista-Foro" onClick={()=>{window.post=r.idPost}}>ver</NavLink>
           </GridItem>
         </GridContainer>
       </CardBody>
     </Card>
     </GridItem>
   ); //return map
 }//llave del mapeo
) : ()=> {return (<h4> Todos los Foros </h4>)})


            },
            {
              tabName: "Mis foros",
              tabIcon: Cloud,
              tabContent: (

  forosPost.length!=0?forosPost.data.filter(p=>window.userSesion[0].idUsuario==p.idUsuario).map((r,i)=>{
   return(
     <GridItem xs={12} sm={6} md={6} key={i}>
     <Card key={i}>
       <CardBody>
         <GridContainer justifyContent="center">
           <GridItem xs={12} sm={12} md={4} >
             <img src={r.img} style={{maxHeight:184, maxWidth:184}}/>
           </GridItem>
           <GridItem xs={12} sm={12} md={8} >
             <p>
             {r.titulo},<br/>
             Tipo de foro: {r.tema},<br/>
             Descripcion: {r.descripcion}
             </p>
           </GridItem>
           <GridItem xs={6} sm={12} md={3}>
              <NavLink to="/user/Vista-Foro" onClick={()=>{window.post=r.idPost}}>ver</NavLink>
           </GridItem>
         </GridContainer>
       </CardBody>
     </Card>
     </GridItem>
   ); //return map
 }//llave del mapeo
) : ()=> {return (<h4> Todos los Foros </h4>)})
            }
          ]}
        />

        <DiscussionEmbed
            shortname='scoutsad'
            config={
                {
                    url: 'http://localhost:3000/user/foros-sociales',
                    identifier: 'foros Sociales ID',
                    title: 'Foros Sociales Titulo',
                    language: 'es_MX'
                }
            }
        />

    </div>
  );
}
