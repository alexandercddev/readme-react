/**  
 * @author: AlexanderCD
 * @description: Sobre mí
 * @date: 27/05/2021
 **/
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {
    CardMedia, 
    CardActions,
    CardContent
} from '@material-ui/core/'; 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import {
    Face as FaceIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    YouTube as YouTubeIcon,
    Settings as SettingsIcon,
    BugReport as BugReportIcon
} from '@material-ui/icons/';
import { Avatar } from '@material-ui/core/';  
import Grid from '@material-ui/core/Grid';   

/** Clase Sobre mí **/
export class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youTube: "https://www.youtube.com/channel/UCmXXKj2lTr8J1zh3KCTj2XQ?sub_confirmation=1",
            gitHub: "https://github.com/AlexanderCDs",
            linkedIn: "https://www.linkedin.com/in/alexander-arturo-chi-dominguez-15a3a5186/"
        };
    }

    /** Método del ciclos de vida de react para 
     * validar si extisten cambios en las props **/
    shouldComponentUpdate(nextProps) {
        console.log("shouldComponentUpdate")
        return true;
    }

    /** Abrir GitHub, YouTube, LinkedIn **/
    handleSocialMedia = (name) => {
        window.open(this.state[name]);
    }

    render() {
        const {
            classes
        } = this.props;
        return (
            <div id = "about-me" className={classes.backGroundSeccition}>
                <Grid container spacing={2} className={classes.gridContent}>
                    <Grid item > 
                        <Avatar
                            className={classes.porfile}
                            aria-label="Logo de AlexanderCD"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            alt="Logo"
                            src="/img/logo.png" />
                    </Grid>
                    <Grid item md lg sm> 
                        <Card className={classes.aboutMe}>
                            <CardContent className={classes.content}>
                                <Typography 
                                    variant="h5"
                                    component="h2" >
                                    Sobre mí
                                </Typography>
                                <Typography className={classes.content}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    Hola, Soy Alexander, desarrollador {" "}
                                    <Chip 
                                        className={classes.chipColor}
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        icon={<FaceIcon />}
                                        label=" frontend "
                                    />
                                    {" "} y {" "}
                                    <Chip
                                        className={classes.chipColor}
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        icon={<BugReportIcon />}
                                        label=" backend "
                                    />
                                    {" "}lo que muchos conocen como {" "}
                                    <Chip
                                        className={classes.chipColor}
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        icon={<SettingsIcon />}
                                        label=" fullstack "
                                    />
                                    {" "}con más de 3 años de experiencia en el mundo
                                    del desarrollo web.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.aboutMe}>
                            <CardContent className={classes.content}> 
                                <Typography className={classes.content}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    Apasionado por la programación y las buenas practicas en
                                    codificación, procuro que mis desarrollos sean adecuados,
                                    precisos y agradables para todas las personas.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.aboutMe}>
                            <CardContent className={classes.content}> 
                                <Typography className={classes.content}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    En mi tiempo libre creo contenido para quienes comienzan
                                    en el mundo de la programación.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Grid container spacing={3}>
                            <Grid item md lg sm xs>
                                <Card className={classes.aboutMe}>
                                    <CardMedia
                                        className={classes.media}
                                        image="/img/github.jpg"
                                        title="GitHub"
                                    />
                                    <CardActions className={classes.content}>
                                        <Button
                                            className={classes.content}
                                            size="small"
                                            color="default"
                                            onClick={() => { this.handleSocialMedia("gitHub") }}
                                            startIcon={<GitHubIcon />}>
                                            GitHub
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item md lg sm xs>
                                <Card className={classes.aboutMe}>
                                    <CardMedia
                                        className={classes.media}
                                        image="/img/linkedIn.jpg"
                                        title="LinkedIn"
                                    />
                                    <CardActions className={classes.content}>
                                        <Button
                                            size="small"
                                            color="primary"
                                            onClick={() => { this.handleSocialMedia("linkedIn") }}
                                            startIcon={<LinkedInIcon />}>
                                            LinkedIn
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item md lg sm xs>
                                <Card className={classes.aboutMe}>
                                    <CardMedia
                                        className={classes.media}
                                        image="/img/youTube.jpg"
                                        title="YouTube"
                                    />
                                    <CardActions className={classes.content}>
                                        <Button
                                            size="small"
                                            color="secondary"
                                            onClick={() => { this.handleSocialMedia("youTube") }}
                                            startIcon={<YouTubeIcon />}>
                                            YouTube
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid> 
                </Grid>
            </div>
        );
    }
}

export default AboutMe;