/**  
 * @author: AlexanderCD
 * @description: Recursos
 * @date: 27/05/2021
**/ 
import React, { Component } from 'react';  
import Grid from '@material-ui/core/Grid';
import CardListImage from '../component/Cards';

/** Items de CardImage en component **/
const items = [
    {
        title: "Material UI",
        img: "/img/material-ui.svg",
        buttons: [
            {
                text: "Ir a Material UI",
                url: "https://material-ui.com/es/"
            }
        ]
    },
    {
        title: "ReactJS",
        img: "/logo192.png",
        buttons: [
            {
                text: "Ir a ReactJS",
                url: "https://es.reactjs.org/"
            }
        ]
    },
    {
        title: "SweetAlert 2",
        img: "/img/sweetalert2.png",
        buttons: [
            {
                text: "Ir a Swal 2 (JS)",
                url: "https://sweetalert2.github.io/"
            } 
        ]
    },
    {
        title: "SweetAlert 2 React",
        img: "/img/sweetalert2.png",
        buttons: [ 
            {
                text: "Ir a Swal (React)",
                url: "https://www.npmjs.com/package/sweetalert2-react"
            }
        ]
    },
    {
        title: "Poke API",
        img: "/img/pokeapi_256.png",
        buttons: [ 
            {
                text: "Ir a PokeAPI",
                url: "https://pokeapi.co/"
            }
        ]
    },
];

/** Clase Recursos **/
export class Resources extends Component {
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
            <div id="resources" className={classes.backGroundSeccition}>
                <Grid container spacing={3}>
                    <CardListImage
                        classes={classes}
                        items={items}
                    />
                </Grid>
            </div>
        );
    }
}

export default Resources;