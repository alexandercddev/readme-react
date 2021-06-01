/**  
 * @author: AlexanderCD
 * @description: Pokédex
 * @date: 27/05/2021
**/ 
import React, { Component } from 'react'; 
import {  
    ExpandMore as ExpandMoreIcon,
    KeyboardArrowLeft,
    KeyboardArrowRight
} from '@material-ui/icons/'; 
import Grid from '@material-ui/core/Grid'; 
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {CardComponet} from '../component/Cards';
import PokedexModel from '../../utils/pokedeex';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import {
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core'; 
import CircularProgress from '@material-ui/core/CircularProgress';

const dafaultItems = [
    {
      label: '',
      imgPath: '',
    }
]
/** Clase Pokedex **/
export class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex: dafaultItems,
            pokemon: parseInt(1 + (Math.random() * (100-1))),
            prevActiveStep: 0,
            activeStep: 0,
            maxSteps: 1,
            progress: false
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

    handleNext = () => {
        let {prevActiveStep, pokemon} = this.state;
        this.setState({
            pokemon: pokemon + 1,
            prevActiveStep: prevActiveStep + 1
        })
        this.getPokedex();
    };

    handleBack = () => {
        let {prevActiveStep, pokemon} = this.state;
        this.setState({
            pokemon: pokemon - 1,
            prevActiveStep: prevActiveStep - 1
        });
        this.getPokedex();
    };

    /**  **/
    getPokedex = async () => {
        this.setState({progress: true});
        try{
            let {pokedex} = this.state;
            const {data} = await PokedexModel.get("/" + this.state.pokemon);
            pokedex = []
            pokedex.push({
                label: data.name,
                imgPath: data.sprites.other.dream_world.front_default,
                moves: data.moves.map((move, index) => ( move.move.name + ', ' ))
            });
            this.setState({pokedex, progress: false}) 
        }
        catch(error){
            console.info(error)
        }
    }

    render() {
        const {
            classes,
            classesPokedex,
            theme
        } = this.props;
        return (
            <div id="pokedex" className={classes.backGroundSeccition}>
                <Grid container spacing={2}>
                    <Grid item md lg sm xs>
                        <CardComponet
                            classes={classes}>
                            <div className={classesPokedex.root && classesPokedex.avatar}>
                                <Paper square elevation={0} className={classesPokedex.header}>
                                    <Typography>{this.state.pokedex[this.state.activeStep].label}</Typography>
                                </Paper>
                                <img
                                    className={classesPokedex.img}
                                    src={this.state.pokedex[this.state.activeStep].imgPath}
                                    alt={this.state.pokedex[this.state.activeStep].label}
                                /> 
                                <MobileStepper
                                    steps={this.state.maxSteps}
                                    position="static"
                                    variant="text"
                                    activeStep={this.state.activeStep}
                                    nextButton={
                                        <Button size="small" onClick={this.handleNext} disabled={this.state.progress}>
                                            Siguiente
                                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                        </Button>
                                    }
                                    backButton={
                                        <Button size="small" onClick={this.handleBack} disabled={this.state.progress}>
                                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                            Anterior
                                        </Button>
                                    }
                                />
                            </div>
                        </CardComponet>
                    </Grid>
                    <Grid item md lg sm xs>
                        <CardComponet
                            classes={classes}>
                            <Accordion className={classes.aboutMe}>
                                <AccordionSummary
                                    className={classes.content}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Movimientos</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        className={classes.content}>
                                        {this.state.pokedex[this.state.activeStep].moves}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardComponet>
                    </Grid>
                </Grid>
                {this.state.progress &&
                    <div className={classesPokedex.loading}>
                        <CircularProgress />
                    </div>
                }
            </div>
        );
    }
}

export default Pokedex;