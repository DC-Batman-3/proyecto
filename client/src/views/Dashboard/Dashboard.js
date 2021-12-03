import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons



import Button from "components/CustomButtons/Button.js";

import AccessTime from "@material-ui/icons/AccessTime";


// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";



import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";




import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tabs from "components/CustomTabs/CustomTabs.js";

import { DiscussionEmbed } from 'disqus-react';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>


      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
        <h4>Mas visto</h4>
          <Card chart>
            <CardHeader color="success">

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Foro2</h4>
              <p className={classes.cardCategory}>

                Mas texto de relleno
              </p>

            </CardBody>
            <CardFooter chart>
                <Button type="button" color="info">Ver</Button>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <h4> Mas Nuevo   </h4>
          <Card chart>
            <CardHeader color="warning">

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Foro 1</h4>
              <p className={classes.cardCategory}>Texto de relleno</p>
            </CardBody>
            <CardFooter chart>
            <Button type="button" color="info">Ver</Button>
              <div className={classes.stats}>
                <AccessTime />  sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <h4>Recomendado</h4>
          <Card chart>
            <CardHeader color="danger">

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Foro 3</h4>
              <p className={classes.cardCategory}>Texto de relleno</p>
            </CardBody>
            <CardFooter chart>
            <Button type="button" color="info">Ver</Button>
              <div className={classes.stats}>
                <AccessTime />  sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
  <h4> Todos los Foros </h4>
      <Tabs
          title="Ordenar:"
          headerColor="success"
          tabs={[
            {
              tabName: "Mas Visto",
              tabIcon: BugReport,
              tabContent: (
                <Card chart>
                  <CardHeader color="warning">

                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Foro 152</h4>
                    <p className={classes.cardCategory}>Texto de relleno</p>
                  </CardBody>
                  <CardFooter chart>
                  <Button type="button" color="info">Ver</Button>
                    <div className={classes.stats}>
                      <AccessTime />  sent 2 days ago
                    </div>
                  </CardFooter>
                </Card>
              )
            },
            {
              tabName: "Mas nuevo",
              tabIcon: Code,
              tabContent: (
                <Card chart>
                  <CardHeader color="success">

                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Foro 163</h4>
                    <p className={classes.cardCategory}>Texto de relleno</p>
                  </CardBody>
                  <CardFooter chart>
                  <Button type="button" color="info">Ver</Button>
                    <div className={classes.stats}>
                      <AccessTime />  sent 2 days ago
                    </div>
                  </CardFooter>
                </Card>
              )
            },
            {
              tabName: "Mis foros",
              tabIcon: Cloud,
              tabContent: (
                <Card chart>
                  <CardHeader color="danger">

                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Foro 4</h4>
                    <p className={classes.cardCategory}>Texto de relleno</p>
                  </CardBody>
                  <CardFooter chart>
                  <Button type="button" color="info">Ver</Button>
                    <div className={classes.stats}>
                      <AccessTime />  sent 2 days ago
                    </div>
                  </CardFooter>
                </Card>

              )
            }
          ]}
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
