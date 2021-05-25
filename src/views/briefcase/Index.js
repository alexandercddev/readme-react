/** 
 * @author: AlexanderCD
 * @description: Portafolio
 * @date: 23/05/2021
 **/
import React, {Component} from 'react'; 
import clsx from 'clsx';  
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';  
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 
import { 
  Menu as MenuIcon, 
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Folder as FolderIco,
  ContactPhone as ContactPhoneIcon,
  Description as DescriptionIcon
} from '@material-ui/icons/'; 
import Avatar from '@material-ui/core/Avatar';
import HomeCard from '../home/Index.js';


/** Items del menu **/
const items = [
  {
    key: 'home',
    name: 'Home',
    icon: <HomeIcon /> 
  },
  {
    key: 'about-me',
    name: 'About me',
    icon: <InfoIcon /> 
  }, 
  {
    key: 'proyects',
    name: 'Proyects',
    icon: <FolderIco /> 
  },
  {
    key: 'resources',
    name: 'Resources',
    icon: <DescriptionIcon /> 
  },
  {
    key: 'contact',
    name: 'Contact',
    icon: <ContactPhoneIcon /> 
  },
];

/** Clase portafolio **/
export class Briefcase extends Component {
  constructor(props){
    super(props);
    this.state = { 
      classes: this.props.classes,
      open: false,
      theme: this.props.theme
    }; 
  }

  /** Método del ciclos de vida de react para 
   * validar si extisten cambios en las props **/
  shouldComponentUpdate(nextProps){
    console.log("shouldComponentUpdate")
    return true;
  }

  /** Acción clic abiri menu **/
  handleDrawerOpen = (e) => {
    this.setState({open: true});
  }

  /** Acción clic cerrar menu **/
  handleDrawerClose = (e) => {
    this.setState({open: false});
  }

  render(){
    console.info("render") 
    return (
      <div className={this.state.classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(this.state.classes.appBar, {
          [this.state.classes.appBarShift]: this.state.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            edge="start"
            className={clsx(this.state.classes.menuButton, this.state.open && this.state.classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            AlexanderCD
          </Typography>
          <div>
            <IconButton
              aria-label="Logo de AlexanderCD"
              aria-controls="menu-appbar"
              aria-haspopup="true" 
              color="inherit"
            >
              <Avatar
                aria-label="Logo de AlexanderCD"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                alt="Logo"
                src="/img/logo.png"
              />
            </IconButton> 
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={this.state.classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.state.open}
        classes={{
          paper: this.state.classes.drawerPaper,
        }}
      >
        <div className={this.state.classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {this.state.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {items.map((item, index) => (
            <ListItem button key={item.key}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider /> 
      </Drawer>
      <main
        className={clsx(this.state.classes.content, {
          [this.state.classes.contentShift]: this.state.open,
        })}
      >
        <div className={this.state.classes.drawerHeader} />
        <HomeCard/>
      </main>
    </div>
    );
  }
}

export default Briefcase;