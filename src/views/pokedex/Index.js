/**  
 * @author: AlexanderCD
 * @description: Pokédex
 * @date: 27/05/2021
**/ 
import React, { Component } from 'react'; 
import {  
    GitHub as GitHubIcon
} from '@material-ui/icons/'; 
import Grid from '@material-ui/core/Grid'; 
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {CardComponet} from '../component/Cards';
import PokedexModel from '../../utils/pokedeex';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

/** Clase Pokedex **/
export class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex: [],
            pokemon: 1 + (Math.random() * (100-1))
        };       
    }

    componentWillMount(){
        //this.getPokedex(); 
    }

    /** Método del ciclos de vida de react para 
     * validar si extisten cambios en las props **/
    shouldComponentUpdate(nextProps) {
        console.log("shouldComponentUpdate")
        return true;
    }

    /**  **/
    getPokedex = async () => {
        try{
            const {data} = await PokedexModel.get("/" + this.state.pokemon);
            //console.info(data)
            this.setState({pokedex: data.results})
        }
        catch(error){
            console.info(error)
        }
    }

    render() {
        const {
            classes
        } = this.props;
        return (
            <div id="pokedex" className={classes.backGroundSeccition}>
                <Grid container spacing={1}>
                    <Grid item md lg sm xs>
                        <CardComponet
                            classes={classes}>
                            
                        </CardComponet>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Pokedex;