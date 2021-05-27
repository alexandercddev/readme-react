/** 
 * @author: AlexanderCD
 * @description: Principal
 * @date: 24/05/2021
 **/
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import {
    Star as StarIcon,
    Face as FaceIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    YouTube as YouTubeIcon,
    Settings as SettingsIcon,
    BugReport as BugReportIcon,
    FiberManualRecord as FiberManualRecordIcon
} from '@material-ui/icons/';
import {
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core/';

/** Clase Buttons **/
export class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    /** Método del ciclos de vida de react para 
     * validar si extisten cambios en las props **/
    shouldComponentUpdate(nextProps) {
        console.log("shouldComponentUpdate")
        return true;
    }

    render() {
        console.info("render home")
        return (
            <div> 

            </div>
        );
    }
}

export default HomeCard;