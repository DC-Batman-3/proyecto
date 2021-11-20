import React, {useState, useEffect} from "react";
import Axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";

// core components
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
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
  floatingLabelFocusStyle: {
    color: "#FFFFFF"
  },
  select: {
    "&:after": {
      borderColor: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    color: 'white'
  },
  
};

const useStyles = makeStyles(styles);



export default function SearchLayout() {
  const classes = useStyles();
  
  //banderas
  const [getDatos, setGetDatos] = useState(1);
  const [iniBusqueda, setIniBusqueda] = useState(0);

  //filtros
  const [filterResultados,setFilterResultados] = useState('Foros');
  const [tipoForo, setTipoForo] = useState(0);
  const [fSeccion, setFSeccion] = useState(0);
  const [clave, setClave]=useState("");

  //resultados
  const [foro,setForo] =useState([]);
  const [secciones,setSecciones] = useState([]);
  const [rBusquedaF,setRBusquedaF] = useState([]);
  const [rBusquedaU,setRBusquedaU] = useState([]);
  
  useEffect(()=>{
    //get filtros
    if(getDatos){
      Axios.get('http://localhost:3001/get-foro').then((response)=> {
        setForo(response);
      })
      Axios.get('http://localhost:3001/get-secciones').then((response)=> {
        setSecciones(response);
      })
      setGetDatos(0);
    }

    //get resultados
    if(iniBusqueda){
      if(filterResultados==="Foros"){
        Axios.get('http://localhost:3001/get-resultados-foro', {params:{Clave: clave, Tipo: tipoForo}}).then((response)=> {
          setRBusquedaF(response);
        })
      }else{
        Axios.get('http://localhost:3001/get-resultados-personas', {params:{Clave: clave, Seccion: fSeccion}}).then((response)=> {
          setRBusquedaU(response);
      })}
      setIniBusqueda(0);
    }
  })
  return (
    <>
      <Card>
        <CardHeader color="success">
          <GridContainer  justifyContent="center">
            
            <GridItem xs={2} sm={4} md={4} >
              <h4 className={classes.cardTitleWhite}>Busqueda de usuarios o foros</h4>
              <p className={classes.cardCategoryWhite}>
                Predeterminado para buscar foros, si deseas buscar usuarios, marca la opción.
              </p>
              <TextField onChange={(e)=>{setClave(e.target.value)}} className = {classes.floatingLabelFocusStyle} variant="filled" label = "Busqueda" formControlProps={{fullWidth: true}} width = "Fluid" style = {{width: '65%'}}/>  
              <Button onClick={()=>setIniBusqueda(1)}variant="outlined" color="secondary" style = {{marginTop: "0.5em", marginLeft: "3em", marginRight: "3"}}>
                Buscar
              </Button>
            </GridItem>
            
            <GridItem xs={2} sm={4} md={4} >
              <FormControl component="fieldset" className={classes.formControl} style = {{marginTop: "2 vh"}}>
                <FormLabel className = {classes.floatingLabelFocusStyle} component="legend">Resultados</FormLabel>
                <RadioGroup aria-label="Resultados" name="res" value={filterResultados}>
                  <FormControlLabel className = {classes.floatingLabelFocusStyle} value="Foros" control={<Radio onChange={function(){setFilterResultados('Foros');setRBusquedaU([])}}/>} label="Solo foros" />
                  <FormControlLabel className = {classes.floatingLabelFocusStyle} value="Personas" control={<Radio onChange={function(){setFilterResultados('Personas');setRBusquedaF([])}}/>} label="Solo personas" />
                </RadioGroup>
              </FormControl>
            </GridItem>
            
            <GridItem xs={2} sm={4} md={4} >
              <FormGroup>
                
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel style = {{marginTop: "1em"}} htmlFor="outlined-age-simple" className = {classes.select}>
                    Secciones
                  </InputLabel>
                  <Select defaultValue="" className = {classes.select} style = {{marginTop: "1em"}} onChange={(event) =>{setFSeccion(event.target.value)}} input={<OutlinedInput name="seccion" id="outlined-seccion-simple"/>}>
                    <MenuItem value={0}>{"No importa"}</MenuItem>
                    {secciones.length != 0 ? secciones.data.map((Seccion, i) => <MenuItem key={i} value={Seccion.seccion}>{Seccion.seccion}</MenuItem>):null}
                  </Select>
                </FormControl>
                
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel style = {{marginTop: "1em"}} htmlFor="outlined-age-simple" className = {classes.select}>
                    Tipos de foro
                  </InputLabel>
                  <Select defaultValue="" className = {classes.select} style = {{marginTop: "1em"}} onChange={(event) =>{setTipoForo(event.target.value)}} input={<OutlinedInput name="foro" id="outlined-foro-simple"/>}>
                    <MenuItem value={0}>{"No importa"}</MenuItem>
                    {foro.length!=0?foro.data.map((foros)=> <MenuItem key={foros.idForo} value={foros.idForo}>{foros.tipoDeForo}</MenuItem>):null}
                  </Select>
                </FormControl>

              </FormGroup>
            </GridItem>

          </GridContainer>
        </CardHeader>
        
        <CardBody>
          {
            filterResultados === "Foros" ? 
              rBusquedaF.length!=0?rBusquedaF.data.map((r,i)=>{
                return(
                  <Card key={i}>
                    <CardBody>
                      <img src={r.img} style={{maxHeight:184, maxWidth:184}}/>
                      <p>
                        Usuario: {r.NombreCompleto},
                        Tipo de foro: {r.tipoDeForo},
                        Descripcion: {r.descripcion}
                      </p>
                    </CardBody>
                  </Card>
                );
              }):null
            :
              rBusquedaU.length!=0?rBusquedaU.data.map((r,i)=>{
                return(
                  <Card key={i}>
                    <CardBody>
                      <p>
                        Nombre: {r.NombreCompleto},
                        Fecha de nacimiento: #{r.numTropa},
                        Seccion: {r.seccion}
                      </p>
                    </CardBody>
                  </Card>
                );
              }):null
          }
        </CardBody>

      </Card>
    </>
  );
}