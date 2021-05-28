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


/** Clase Card con imagen y botones **/
export class CardListImage extends Component {
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
    handleOnClick = (url) => {
        window.open(url);
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
                            />
                            <CardActions className={classes.content || classes.cardAction}>
                                {item.buttons.map((btn, i) => (
                                    <Button
                                        key={"btn" + index}
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