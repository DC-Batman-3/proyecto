import React, { useState, useEffect} from "react";
import Axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useForm } from "react-hook-form";

import avatar from "assets/img/tim_80x80.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const {register, getValues} = useForm();
  const [about_text, setAboutText] = useState(window.userSesion[0].descripcion);
  
  useEffect(()=>{
    Axios.post('http://localhost:3001/update-user-descripcion', {params:{about: about_text, id: window.userSesion[0].idUsuario}})
  })

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <form>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>Termina tu perfil.</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      {...register("tAbout")}
                      id="outlined-multiline-static"
                      label="¡Date a conocer para que todos sepamos algo de ti!"
                      multiline
                      rows={4}
                      defaultValue=""
                      fullWidth
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="warning" onClick={()=>{
                  var c = getValues('tAbout');
                  setAboutText(c);
                  window.userSesion[0].descripcion = c;
                }}>Actualizar</Button>
              </CardFooter>  
            </form>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>{window.userSesion[0].Nombre} {window.userSesion[0].Apellidos}</h4>
              <h6 className={classes.cardCategory}>#{window.userSesion[0].numTropa} Sección: {window.userSesion[0].seccion}</h6>
              <p className={classes.description}>
                {about_text}
              </p>
              <Button color="warning" round>
                Chat
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
