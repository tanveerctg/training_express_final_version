import React from 'react';
import classes from './SmoothScroll.module.scss';


function SmoothScroll(){
    return(
        <div className={classes.smoothScroll}>
           <div className={classes.itm}>
             <span className={classes.circle}></span>
           </div>
        </div>
    )
}

export default SmoothScroll;