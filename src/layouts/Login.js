import React from "react";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import { TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import supImage from "assets/img/pleca-superior-2021.png";
import infImage from "assets/img/pleca-inferior-2021.png";
import pImage from "assets/img/Low3.png";
/* import CustomInput from "components/CustomInput/CustomInput.js"; */

import User from "layouts/User.js";
import RTL from "layouts/RTL.js";

import styles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

const useStyles = makeStyles(styles);

function funcion(){
    const {register, getValues} = useForm();
    return(
        <form>
            <GridContainer direction="column" alignmentx="center" justify="center">
                <TextField {...register("usuario")} variant="standard" id="Usuario" label = "Usuario" formControlProps={{fullWidth: true}} style = {{marginBottom: "2em"}}/>
                <TextField {...register("contraseña")} variant="standard" type ="password" id="Contraseña" label = "Contraseña" formControlProps={{fullWidth: true}} style = {{marginBottom: "2em"}}/>
                <Button color="success" variant="contained" Type="submit" value="sumbit" onClick={()=>{
                    const u=getValues("usuario");
                    const c=getValues("contraseña");
                    if(u==="Usuario" && c ==="1234")
                        ReactDOM.render(
                            <BrowserRouter>
                                <Switch>
                                  <Route path="/user" component={User} />
                                  <Route path="/rtl" component={RTL} />
                                  <Redirect from="/Login" to="/user/foros-sociales"/>
                                </Switch>
                            </BrowserRouter>,
                        document.getElementById("root"));
                }}>
                    Log in
                </Button>
            </GridContainer>
        </form>
    );
}
export default function Login() {
    const [imageSup] = React.useState(supImage);
    const [imageInf] = React.useState(infImage);
    const classes = useStyles();

    return(
        <GridContainer justify="center" alignItems="center" direction="column" style={
            {minHeight: "100vh", 
            maxHeight: "auto", 
            /* background: "url(" + image + ")",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover" */}}>
            <img src={imageSup} style={{position: 'absolute', top: "0px", left:"0px", minHeight: "1vh",maxWidth:"1871px"}}/>
            <img src={imageInf} style={{position: 'absolute', bottom: "0px", left:"0px", minHeight: "1vh",maxWidth:"1861px"}}/>
            <GridItem>
                <Typography variant="h5" color="success">
                    Bienvenido!
                </Typography>
            </GridItem>
            <GridItem>
                <Card style={{ width: "15rem" }}>
                <img
                    className={classes.cardImgTop}
                    data-src="holder.js/100px180/"
                    alt="100%x180"
                    style={{ height: "180px", width: "100%", display: "block" }}
                    src={pImage}
                    data-holder-rendered="true"
                />
                    <CardBody>
                        {funcion()}
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

