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
import { 
  IconButton, 
  Button 
} from '@material-ui/core';  
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 
import { 
  Menu as MenuIcon, 
  Home as HomeIcon, 
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon, 
  Info as InfoIcon,
  Folder as FolderIco,
  ContactPhone as ContactPhoneIcon,
  Description as DescriptionIcon,
  Copyright as CopyrightIcon,
  PhoneAndroid as PhoneAndroidIcon
} from '@material-ui/icons/';  
import Avatar from '@material-ui/core/Avatar';
import HomeCard from '../home/Index.js'; 
import AboutMe from '../about-me/Index.js'; 
import Proyects from '../proyects/Index.js'; 
import Contact from '../contact/Index.js'; 
import Resources from '../resources/Index.js'; 
import Pokedex from '../pokedex/Index.js'; 

/** Items del menu **/
const items = [
  {
    key: 'home',
    name: 'Principal',
    icon: <HomeIcon /> 
  }, 
  {
    key: 'about-me',
    name: 'Sobre mí',
    icon: <InfoIcon /> 
  }, 
  {
    key: 'proyects',
    name: 'Proyectos',
    icon: <FolderIco /> 
  },
  {
    key: 'pokedex',
    name: 'Pokédex',
    icon: <PhoneAndroidIcon /> 
  }, 
  {
    key: 'resources',
    name: 'Recursos',
    icon: <DescriptionIcon /> 
  },
  {
    key: 'contact',
    name: 'Contacto',
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
      theme: this.props.theme,
      year: (new Date().getFullYear()),
      component: "home",
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

  /** Acción clic cerrar menu **/
  handleClickItem (name) {
    this.setState({component: name})
  }

  /** Render views **/
  renderComponent () {
    let {component} = this.state;
    let {classesCard} = this.props;
    switch (component) {
      case "home":
        return <HomeCard classes = {classesCard}/>;
      case "about-me":
        return <AboutMe classes = {classesCard}/>;
      case "proyects":
        return <Proyects classes = {classesCard}/>;
      case "resources":
        return <Resources classes = {classesCard}/>;
      case "contact":
        return <Contact classes = {classesCard}/>;
      case "pokedex":
        return <Pokedex classes = {classesCard}/>; 
      default:
        break;
    }
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
              aria-label="Logo de AlexanderCD"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick = {() =>{ this.handleClickItem('home')}}
            >
              <Avatar
                aria-label="Logo de AlexanderCD"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                alt="Logo"
                src="/img/logo.png"
              />
            </IconButton>
          <Typography 
            variant="h6" 
            noWrap 
            className={this.state.classes.title}>
            Alexander CD
          </Typography>
          <div 
            className={clsx(this.state.classes.navDesktop)}>
            {items.map((item, index) => (
              <Button 
                key={item.key}
                color = "inherit"
                onClick = {() =>{ this.handleClickItem(item.key)}}>
                {item.name}
              </Button>
            ))} 
          </div>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={this.handleDrawerOpen}
            className={
              clsx(this.state.open && this.state.classes.hide || this.state.classes.navMobile)
            }>
            <MenuIcon />
          </IconButton>
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
            <ListItem 
              button key={item.key}
              onClick = {() =>{ this.handleClickItem(item.key)}}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider /> 
        <ListItem button> 
        < ListItemIcon><CopyrightIcon/></ListItemIcon> 
          <ListItemText primary={this.state.year + " Alexander Chi"} />
        </ListItem>
      </Drawer>  
      <main
        className={clsx(this.state.classes.content, {
          [this.state.classes.contentShift]: this.state.open,
        })}
      >  
        <div className={this.state.classes.drawerHeader} /> 
        { this.renderComponent() } 
      </main> 
    </div>
    );
  }
}

export default Briefcase;