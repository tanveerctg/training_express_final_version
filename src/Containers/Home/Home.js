import React, { Component } from 'react'
import classes from './Home.module.scss';
import SmoothScroll from '../SmoothScroll/SmoothScroll';
import whiteBg from '../../img/WHITEBG.jpg';

export default class Home extends Component {

  render() {
    return (
      <div className={classes.home} >
          <img src={whiteBg} style={{width:'100%',height:'100%'}}/>
      </div>
    )
  }
}