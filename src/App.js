/** 
 * @author: AlexanderCD
 * @description: Portafolio
 * @date: 23/05/2021
 **/
import React from 'react';
import Briefcase from './views/briefcase/Index';  
import { useTheme } from '@material-ui/core/styles';
import { useStyleMain, useStyleCard, useStylesPokedex } from './utils/Style';
import clsx from 'clsx';  


function App(props) {
  const classes = useStyleMain();
  const theme = useTheme(); 
  const classesCard = useStyleCard(); 
  const classesPokedex = useStylesPokedex();
  //
  return (
    <div className ={clsx(classes.parallax)}>
      <Briefcase 
        classes = {classes}
        classesCard = {classesCard} 
        classesPokedex = {classesPokedex}
        theme = {theme} 
      />
    </div>
  );
}

export default App;
