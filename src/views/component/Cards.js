/**  
 * @author: AlexanderCD
 * @description: Proyecto
 * @date: 27/05/2021
**/ 
import React, { Component } from 'react'; 
import {
    Card,
    CardMedia, 
    CardContent,
    CardActions,
    Button,
    Typography,
    Grid,
} from '@material-ui/core/'; 
import { 
    WebAsset as WebAssetIcon, 
    ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons/';
import SweetAlert from 'sweetalert2-react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core'; 
import GrowDefault from './Transitions';

/** Clase Card con imagen y botones **/
export class CardListImage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,
            response: {
                title: "",
                message: "",
                success: true
            }
        };
    }

    /** Método del ciclos de vida de react para 
     * validar si extisten cambios en las props **/
    shouldComponentUpdate(nextProps) {
        console.log("shouldComponentUpdate")
        return true;
    }

    /** Abrir sitio web en otra pagina **/
    handleOnClick = (url) => {
        window.open(url);
    }

    handleAlert = (params) =>{
        if(params === undefined){
            this.setState({ show: !this.state.show })
        }else{
            const {title, desciption} = params;
            this.setState({
                show: !this.state.show,
                response: {
                    title,
                    message: desciption,
                    success: true
                }
            })
        } 
    }

    render() {
        const {
            classes,
            items,
            accordion
        } = this.props;
        return (
            <> 
                {items.map((item, index) => (
                    <Grid item md lg sm xs key={"head" + item.key + index}>
                        <GrowDefault>
                            <Card className={classes.aboutMe}>
                                <CardMedia
                                    className={classes.media}
                                    style={!accordion ? {backgroundSize: 'contain', margin: 10 } : null}
                                    image={item.img}
                                    title={item.title}
                                    onClick={() => { this.handleAlert(item) }}
                                />
                                {accordion &&
                                    <Accordion className={classes.aboutMe}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className={classes.heading}>{item.title}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {item.desciption}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                }
                                <CardActions className={classes.content || classes.cardAction}>
                                    {item.buttons.map((btn, i) => (
                                        <Button
                                            key={"btn" + i}
                                            className={(btn.color === undefined) && classes.content}
                                            size="small"
                                            color={(btn.color === undefined) ? 'default' : btn.color}
                                            onClick={() => { this.handleOnClick(btn.url) }}
                                            startIcon={(btn.icon === undefined) ? < WebAssetIcon /> : btn.icon}>
                                            {btn.text}
                                        </Button>
                                    ))}
                                </CardActions>
                            </Card>
                        </GrowDefault>
                        <SweetAlert
                            type ={this.state.response.success ? 'info' : 'warning'}
                            show={this.state.show}
                            title={this.state.response.title}
                            text={this.state.response.message}
                            onConfirm={this.handleAlert}
                        />
                    </Grid>
                ))} 
            </>
        );
    }
}

CardListImage.defaultProps = {
    accordion: false
}

/** Clase Card con componente hijo **/
export class CardComponet extends Component {
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
    render() {
        const {
            classes, 
            children
        } = this.props;
        return (
            <>
                <GrowDefault>
                    <Card className={classes.aboutMe}>
                        <CardContent className={classes.content}>
                        {children}
                        </CardContent>
                    </Card>
                </GrowDefault>
            </>
        );
    }
}

export default CardListImage;