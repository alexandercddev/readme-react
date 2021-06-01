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
  /*{
    key: 'contact',
    name: 'Contacto',
    icon: <ContactPhoneIcon /> 
  }, */
];

const technologies = [
  {
    title: "SQL#",
    img: "/img/csharp.png",
    desciption: "Desarrollo en .Net",
  },
  {
    title: "C#",
    img: "/img/csharp.png",
    desciption: "Desarrollo en .Net",
  },
  {
    title: "ReactJS",
    img: "/img/reactjs.png",
    desciption: "Desarrollo en .Net",
  },
];

/** Clase portafolio **/
export class Briefcase extends Component {
  constructor(props){
    super(props);
    this.state = { 
      open: false,
      year: (new Date().getFullYear()),
      component: localStorage.getItem('selected') ?? "home",
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
    let {classesCard, classesPokedex, theme} = this.props;
    localStorage.setItem('selected', component);
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
        return <Pokedex theme = {theme} classes = {classesCard} classesPokedex = {classesPokedex}/>; 
      default:
        localStorage.setItem('selected', null)
        break;
    }
  }
  render(){
    console.info("render") 
    const {
      classes, 
      theme
    } = this.props;
    return (
      <div className={classes.root}> 
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: this.state.open,
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
            className={classes.title}>
            Alexander CD
          </Typography>
          <div 
            className={clsx(classes.navDesktop)}>
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
              clsx(this.state.open && classes.hide || classes.navMobile)
            }>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
        className={clsx(classes.content, {
          [classes.contentShift]: this.state.open,
        })}
      >  
        <div className={classes.drawerHeader} /> 
        { this.renderComponent() } 
      </main> 
    </div>
    );
  }
}

export default Briefcase;