/** 
 * @author: AlexanderCD
 * @description: Estilos
 * @date: 27/05/2021
 **/
 import { makeStyles } from '@material-ui/core/styles';

 const drawerWidth = 240;
 
 export const useStyleMain = makeStyles((theme) => ({
   root: {
     display: 'flex',
   },
   appBar: {
     transition: theme.transitions.create(['margin', 'width'], {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.leavingScreen,
     }),
     background: "#212121"
   },
   appBarShift: {
     width: `calc(100% - ${drawerWidth}px)`,
     transition: theme.transitions.create(['margin', 'width'], {
       easing: theme.transitions.easing.easeOut,
       duration: theme.transitions.duration.enteringScreen,
     }),
     marginLeft: drawerWidth,
   },
   title: {
     flexGrow: 1,
   },
   hide: {
     display: 'none',
   },
   navMobile: {
     display: 'flex',
     [theme.breakpoints.up("md")]:{
       display: "none"
     }
   },
   navDesktop: {
     display: 'none',
     [theme.breakpoints.up("md")]:{
       display: "flex"
     }, 
     [theme.breakpoints.up("lg")]:{
       marginLeft: "10%"
     }, 
   },
   drawer: {
     width: drawerWidth,
     flexShrink: 0,
   },
   drawerPaper: {
     width: drawerWidth,
   },
   drawerHeader: {
     display: 'flex',
     alignItems: 'center',
     padding: theme.spacing(0, 1),
     // necessary for content to be below app bar
     ...theme.mixins.toolbar,
     justifyContent: 'flex-end',
   },
   content: {
     flexGrow: 1,
     padding: theme.spacing(3),
     transition: theme.transitions.create('margin', {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.leavingScreen,
     }),
     marginLeft: -drawerWidth,  
     backgroundImage: `url(${"/img/background01.jpg"})`, 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh', 
   },
   parallax:{
    
    background: '#0a090e'
   }, 
   contentShift: {
     transition: theme.transitions.create('margin', {
       easing: theme.transitions.easing.easeOut,
       duration: theme.transitions.duration.enteringScreen,
     }),
     marginLeft: 0,
   },
   
 }));
 
 export const useStyleCard = makeStyles((theme) => ({
   root: { 
     display: 'flex',
     justifyContent:'center',
     backgroundColor: 'rgba(255, 255, 255, 0.1)',
     backdropFilter: 'blur(10px)',
     marginTop: '20vh',
     marginBottom: '30vh',
     [theme.breakpoints.up("sm")]:{
       marginBottom: '40vh',
     }, 
     [theme.breakpoints.up("md")]:{
       marginBottom: '45vh',
     }, 
     [theme.breakpoints.up("xs")]:{
       marginBottom: '10vh',
     }, 
     [theme.breakpoints.up("lg")]:{
       marginBottom: '20vh',
     }, 
   },
   aboutMe: {  
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    marginBottom: 10
   },  
   cover: {
     width: theme.spacing(25),
     height: theme.spacing(25),
   }, 
   content:{
     color: "#FFF"
   },
   avatar:{
     marginTop: 80,
     width: 150,
     height: 150,
     [theme.breakpoints.up("lg")]:{
       width: 200,
       height: 200, 
     }, 
     [theme.breakpoints.up("sm")]:{
       marginTop: 50,
     }, 
     position: 'relative',
     marginLeft: 'auto',
     marginRight: 'auto'
   },
   porfile:{ 
    display: 'flex',
    justifyContent:'center',
    width: 150,
    height: 150,
    [theme.breakpoints.up("lg")]:{
      width: 200,
      height: 200, 
    },   
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 
  },
  gridContent:{
    [theme.breakpoints.up("xs")]:{
      display: 'flex',
      justifyContent: 'center'
    }, 
  },
  chipColor: {
    color: "#f9f9aa",
    border: '#f9f9aa'
  },
  cardAction:{
    display: 'flex',
    justifyContent:'center',
  },
  rootList:{
    width: '100%',
    maxWidth: 360,
    maxHeight: "80vh",
    backgroundColor: 'transparent', 
  },
  autocompleted: {
    
  }
 }));
 
 export const useStyleSocial = makeStyles((theme) => ({
   root: {
     display: 'flex',
     flexWrap: 'wrap',
     minWidth: 300,
     width: '100%',
   },
   image: {
     position: 'relative',
     height: 200,
     [theme.breakpoints.down('xs')]: {
       width: '100% !important', // Overrides inline-style
       height: 100,
     },
     '&:hover, &$focusVisible': {
       zIndex: 1,
       '& $imageBackdrop': {
         opacity: 0.15,
       },
       '& $imageMarked': {
         opacity: 0,
       },
       '& $imageTitle': {
         border: '4px solid currentColor',
       },
     },
   },
   focusVisible: {},
   imageButton: {
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     color: theme.palette.common.white,
   },
   imageSrc: {
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     backgroundSize: 'cover',
     backgroundPosition: 'center 40%',
   },
   imageBackdrop: {
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     backgroundColor: theme.palette.common.black,
     opacity: 0.4,
     transition: theme.transitions.create('opacity'),
   },
   imageTitle: {
     position: 'relative',
     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
   },
   imageMarked: {
     height: 3,
     width: 18,
     backgroundColor: theme.palette.common.white,
     position: 'absolute',
     bottom: -2,
     left: 'calc(50% - 9px)',
     transition: theme.transitions.create('opacity'),
   },
 }));

 