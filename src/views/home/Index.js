/** 
 * @author: AlexanderCD
 * @description: Portafolio
 * @date: 24/05/2021
 **/
import React, {Component} from 'react';  
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import {
  Star as StarIcon,  
  Face as FaceIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Settings as SettingsIcon,
  BugReport as BugReportIcon, 
} from '@material-ui/icons/';  

 /** Clase home **/
export class HomeCard extends Component {
  constructor(props){
    super(props);
    this.state = {  
    };   
  }

  /** Método del ciclos de vida de react para 
   * validar si extisten cambios en las props **/
  shouldComponentUpdate(nextProps){
    console.log("shouldComponentUpdate")
    return true;
  }

  /**  **/
  handle = (e) => {
    this.setState({open: true});
  } 

  render(){
    console.info("render") 
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="AlexanderCD"
              height="300"
              image="/img/lock.jpeg"
              title="AlexanderCD"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2">
                Alexander Chi Domínguez <StarIcon />
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p">
                Hola, Soy Alexander, desarrollador {" "}
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  icon={<FaceIcon />}
                  label=" frontend "
                />
                {" "} y {" "}
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  icon={<BugReportIcon />}
                  label=" backend "
                />
                {" "}lo que muchos conocen como {" "}
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  icon={<SettingsIcon />}
                  label=" fullstack "
                />
                {" "}con más de 3 años de experiencia en el mundo del desarrollo web.
              </Typography>
              <Typography 
                style={{
                  marginTop: "10px"
                }}
                gutterBottom
                variant="h5"
                component="h2">
                Alexander Chi Domínguez <StarIcon />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="default"
              startIcon={<GitHubIcon />}>
              GitHub
          </Button>
            <Button
              size="small"
              color="primary"
              startIcon={<LinkedInIcon />}>
              LinkedIn
          </Button>
            <Button
              size="small"
              color="secondary"
              startIcon={<YouTubeIcon />}>
              Youtube
          </Button>
          </CardActions>
        </Card> 
      </div>
    );
  }
}

export default HomeCard;