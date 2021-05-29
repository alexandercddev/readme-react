/**  
 * @author: AlexanderCD
 * @description: Proyecto
 * @date: 27/05/2021
**/ 
import React, { Component } from 'react'; 
import {  
    GitHub as GitHubIcon
} from '@material-ui/icons/'; 
import Grid from '@material-ui/core/Grid';
import CardListImage from '../component/Cards';

/** Items de CardImage en component **/
const items = [
    {
        title: "Miel Roche",
        img: "/img/Banner-Principal-Miel-Roche.png",
        desciption: "Sitio realizado con Wordpress",
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
        desciption: "Sitio realizado con ReactJS",
        buttons: [
            {
                text: "Ir a Alexander CD",
                url: "https://alexandercd.herokuapp.com/", 
            },
            {
                text: "Ir al GitHub",
                url: "https://github.com/AlexanderCDs/readme-react",
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

    /** Abrir sitio web en otra pagina **/
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
                    <CardListImage
                        classes={classes}
                        items={items}
                    />
                </Grid>
            </div>
        );
    }
}

export default Proyects;