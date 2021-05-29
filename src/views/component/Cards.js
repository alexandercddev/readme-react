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
} from '@material-ui/icons/';
import SweetAlert from 'sweetalert2-react';

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
            items
        } = this.props;
        return (
            <>
                {items.map((item, index) => (
                    <Grid item md lg sm xs key={"head" + index}>
                        <Card className={classes.aboutMe}>
                            <CardMedia
                                className={classes.media}
                                image={item.img}
                                title={item.title}
                                onClick={() => { this.handleAlert(item)}}
                            />
                            <CardActions className={classes.content || classes.cardAction}>
                                {item.buttons.map((btn, i) => (
                                    <Button
                                        key={"btn" + i}
                                        className={(btn.color === undefined) && classes.content}
                                        size="small"
                                        color= {(btn.color === undefined) ? 'default' : btn.color}
                                        onClick={() => { this.handleOnClick(btn.url) }}
                                        startIcon={(btn.icon === undefined) ? < WebAssetIcon /> : btn.icon}>
                                        {btn.text}
                                    </Button>
                                ))}
                            </CardActions>
                        </Card>
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
                <Card className={classes.aboutMe}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.content}
                            variant="body2"
                            color="textSecondary"
                            component="p">
                            {children}
                        </Typography>
                    </CardContent>
                </Card>
            </>
        );
    }
}

export default CardListImage;