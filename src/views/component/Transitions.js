/**  
 * @author: AlexanderCD
 * @description: Transiciones
 * @date: 31/05/2021
**/ 
import React, { Component } from 'react'; 
import Grow from '@material-ui/core/Grow';

/** Clase Recursos **/
export class GrowDefault extends Component {
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
            children
        } = this.props;
        return (
            <>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 1000 } : {})}
                >
                    {children}
                </Grow>
            </>
        );
    }
}

export default GrowDefault;