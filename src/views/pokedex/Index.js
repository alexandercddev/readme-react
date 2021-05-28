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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {CardComponet} from '../component/Cards';
import PokedexModel from '../../utils/pokedeex';

/** Clase Contacto **/
export class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex: []
        };       
    }

    componentWillMount(){
        this.getPokedex(); 
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
            const {data} = await PokedexModel.get("?limit=100&offset=200");
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
            <div id="proyects" className={classes.backGroundSeccition}>
                <Grid container spacing={1}>
                <Grid item md lg sm xs>  
                    <CardComponet
                        classes={classes}> 
                        <List className={classes.rootList}>
                            {this.state.pokedex.map((item, index) => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                         >
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        className = {classes.content}
                                        primary={item.name}  />
                                </ListItem>
                            ))}
                        </List>
                    </CardComponet>
                    </Grid> 
                </Grid>
            </div>
        );
    }
}

export default Pokedex;