/**  
 * @author: AlexanderCD
 * @description: Proyecto
 * @date: 27/05/2021
**/ 
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {
    CardMedia, 
    CardActions
} from '@material-ui/core/';
import Button from '@material-ui/core/Button'; 
import { 
    WebAsset as WebAssetIcon, 
    GitHub as GitHubIcon
} from '@material-ui/icons/'; 
import Grid from '@material-ui/core/Grid';

const items = [
    {
        title: "Miel Roche",
        img: "/img/Banner-Principal-Miel-Roche.png",
        buttons: [
            {
                text: "Ir a Miel Roche",
                url: "https://www.mielroche.com.mx/"
            }
        ]
    },
    {
        title: "Nuevo proyecto",
        img: "/img/logo.png",
        buttons: [
            {
                text: "Ir a Alexander CD",
                url: "https://www.mielroche.com.mx/", 
            },
            {
                text: "Ir al GitHub",
                url: "https://www.mielroche.com.mx/",
                icon: <GitHubIcon />
            }
        ]
    }
];

/** Clase Proyectos **/
export class Proyects extends Component {
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
    handleOpenWin = (url) => {
        window.open(url);
    }

    render() {
        const {
            classes
        } = this.props;
        return (
            <div id="proyects" className={classes.backGroundSeccition}>
                <Grid container spacing={4}>
                    {items.map((item, index) => (
                        <Grid item md lg sm xs key={"item" + index}>
                            <Card className={classes.aboutMe}>
                                <CardMedia
                                    className={classes.media}
                                    image={item.img}
                                    title={item.title}
                                />
                                <CardActions className={classes.content || classes.cardAction}>
                                    {item.buttons.map((btn, i) => (
                                        <Button
                                            className={classes.content}
                                            size="small"
                                            color="default"
                                            onClick={() => { this.handleOpenWin(btn.url) }}
                                            startIcon={(btn.icon == undefined) ? < WebAssetIcon /> : btn.icon}>
                                            {btn.text}
                                        </Button>
                                    ))}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default Proyects;