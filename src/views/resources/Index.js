/**  
 * @author: AlexanderCD
 * @description: Recursos
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
        title: "Poké API",
        img: "/img/Banner-Principal-Miel-Roche.png",
        buttons: [
            {
                text: "Ir a PokéAPI",
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

export default Resources;