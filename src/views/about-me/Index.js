/**  
 * @author: AlexanderCD
 * @description: Sobre mí
 * @date: 27/05/2021
 **/
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {CardContent} from '@material-ui/core/';  
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import {
    Face as FaceIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    YouTube as YouTubeIcon,
    Settings as SettingsIcon,
    BugReport as BugReportIcon,
    Storage as StorageIcon
} from '@material-ui/icons/';
import { Avatar } from '@material-ui/core/';  
import Grid from '@material-ui/core/Grid';   
import {
    CardListImage,
    CardComponet,
} from '../component/Cards';
import GrowDefault from '../component/Transitions';

/** Items de CardImage en component **/
const items = [
    {
        title: "GitHub",
        img: "/img/github.jpg",
        buttons: [
            {
                text: "GitHub",
                url: "https://github.com/AlexanderCDs/",
                icon: <GitHubIcon />, 
            }
        ]
    },
    {
        title: "LinkedIn",
        img: "/img/linkedin.jpg",
        buttons: [
            {
                text: "LinkedIn",
                url: "https://www.linkedin.com/in/alexander-arturo-chi-dominguez-15a3a5186/", 
                icon: <LinkedInIcon />, 
            }, 
        ]
    },
    {
        title: "YouTube",
        img: "/img/youtube.jpg",
        buttons: [
            {
                text: "YouTube",
                url: "https://www.youtube.com/channel/UCmXXKj2lTr8J1zh3KCTj2XQ?sub_confirmation=1", 
                icon: <YouTubeIcon />, 
            }, 
        ]
    }
];

/** Clase Sobre mí **/
export class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = { };
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
                        <GrowDefault>
                            <Avatar
                                className={classes.porfile}
                                aria-label="Logo de AlexanderCD"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                alt="Logo"
                                src="/img/logo.png" />
                        </GrowDefault>
                    </Grid>
                    <Grid item md lg sm>  
                        <GrowDefault>
                            <Card className={classes.aboutMe}>
                                <CardContent className={classes.content}>
                                    <Typography
                                        variant="h5"
                                        component="h2" >
                                        Sobre mí
                                    </Typography>
                                    Hola, Soy Alexander, desarrollador
                                    <Chip
                                            className={classes.chipColor}
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            icon={<FaceIcon />}
                                            label=" frontend "
                                        />
                                    y
                                    <Chip
                                            className={classes.chipColor}
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            icon={<BugReportIcon />}
                                            label=" backend "
                                        />
                                    lo que muchos conocen como
                                    <Chip
                                            className={classes.chipColor}
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            icon={<SettingsIcon />}
                                            label=" fullstack "
                                        />
                                    con más de 3 años de experiencia en el mundo
                                    del desarrollo web.
                                </CardContent>
                            </Card>
                        </GrowDefault>
                        <CardComponet
                            classes = {classes} 
                        >
                            Apasionado por la programación y las buenas practicas en codificación, 
                            procuro que mis desarrollos sean adecuados, precisos y agradables para todas las personas.
                        </CardComponet> 
                        <CardComponet
                            classes = {classes} 
                        >
                            Tecnologías
                            <Chip
                                className={classes.chipColor}
                                variant="outlined"
                                color="primary"
                                size="small"
                                icon={<StorageIcon />}
                                label=" base de datos "
                            />
                            SQL, SAP HANA, Postgres. 
                            para 
                            <Chip
                                className={classes.chipColor}
                                variant="outlined"
                                color="primary"
                                size="small"
                                icon={<FaceIcon />}
                                label=" frontend "
                            />
                            JQuery, ReactJS y para el
                            <Chip
                                className={classes.chipColor}
                                variant="outlined"
                                color="primary"
                                size="small"
                                icon={<BugReportIcon />}
                                label=" backend "
                            />
                            C#, NodeJS, PHP (Laravel).
                        </CardComponet>  
                        <CardComponet
                            classes = {classes} 
                        >
                            En mi tiempo libre creo contenido para quienes 
                            comienzan en el mundo de la programación.
                        </CardComponet>  
                        <Grid container spacing={3}>
                            <CardListImage
                                classes = {classes}
                                items = {items} 
                            />
                        </Grid>
                    </Grid> 
                </Grid>
            </div>
        );
    }
}

export default AboutMe;