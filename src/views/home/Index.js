/** 
 * @author: AlexanderCD
 * @description: Principal
 * @date: 24/05/2021
 **/
import React, {Component} from 'react';   
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography'; 
import { Avatar } from '@material-ui/core/';  
import Grid from '@material-ui/core/Grid';   
import GrowDefault from '../component/Transitions';

 /** Clase home **/
export class HomeCard extends Component {
  constructor(props){
    super(props);
    this.state = { };   
  }

  /** Método del ciclos de vida de react para 
   * validar si extisten cambios en las props **/
  shouldComponentUpdate(nextProps){
    console.log("shouldComponentUpdate")
    return true;
  } 
  
  render(){
    const {
      classes
    } = this.props;
    return (
      <div id = "home"> 
        <Grid container spacing={3}>
          <Grid item md lg sm> </Grid> 
          <Grid item md lg sm>  
            <GrowDefault>
              <Avatar
                className={classes.avatar}
                aria-label="Logo de AlexanderCD"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                alt="Logo"
                src="/img/logo.png"
              />
            </GrowDefault>
            <GrowDefault>
              <Card className={classes.root}>
                <CardContent className={classes.content}>
                  <Typography
                    style={{ textAlign: 'center', }}
                    variant="h5"
                    component="h2" >
                    Desarrollador fullstack
                </Typography>
                  <Typography
                    style={{ textAlign: 'center', }}
                    variant="body2"
                    component="p" >
                    SAP HANA, C#, Jquery
                </Typography>
                  <Typography
                    style={{ textAlign: 'center', }}
                    variant="body2"
                    component="p" >
                    SQL, C#, ReactJS
                </Typography>
                </CardContent>
              </Card>
            </GrowDefault>
          </Grid>
          <Grid item md lg sm> </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomeCard;