import React from 'react'
import classes from './PopularSubjects.module.scss';
import pic1 from '../../img/1.jpg';
import pic2 from '../../img/2.jpg';
import pic4 from '../../img/4.jpg';
import pic3 from '../../img/3.jpg';

function PopularSubjects() {
  return (
     <div className={classes.container}>
     <div className={classes.padding_sm}></div>
      <div className={classes.heading}>
        <h1 className={classes.title}>Most Polpular Subjects</h1>
        <h4 className={classes.subTitle}>We are the most trusted online educator worldwide. Learn from more than 1000 of courses at the comfort of sitting at your home.</h4>
      </div>
      <div className={classes.padding_sm}></div>
      <div className={classes.subjectsContainer}>
        <div className={classes.subjects}>
            <div className={classes.subject}>
                <h3 className={classes.subName}>Technology</h3>
                <span>
                    <h2>Technology</h2>
                </span>       
                <img src={pic1}/>
            </div>
            <div className={classes.subject}>
                <h3 className={classes.subName}>Business</h3>
                <span>
                    <h2>Business</h2>
                </span>     
                <img src={pic2}/>
            </div>
            <div className={classes.subject}>
                <h3 className={classes.subName}>Photography</h3>
                <span>
                    <h2>Photography</h2>
                </span>       
                <img src={pic3}/>
            </div>
            <div className={classes.subject}>
                <h3 className={classes.subName}>Digital Marketing</h3>
                <span>
                    <h2>Digital Marketing</h2>
                </span>            
                <img src={pic4}/>
            </div>
            <div className={classes.subject}>
            <h3 className={classes.subName}>Travel & Tourism</h3>
                <span>
                    <h2>Travel & Tourism</h2>
                </span>            
                <img src={pic2}/>
            </div>
            <div className={classes.subject}>
                <h3 className={classes.subName}>Language</h3>
                <span>
                    <h2>Language</h2>
                </span> 
                <img src={pic3}/>
            </div>
            <div className={classes.subject}>
                <h3 className={classes.subName}>Health & Fitness</h3>
                <span>
                    <h2>Health & Fitness</h2>
                </span>
                <img src={pic4}/>
            </div>
            <div className={classes.subject}>
                <h3 className={classes.subName}>Project Management</h3>
                <span>
                    <h2>Project Management</h2>
                </span>  
                <img src={pic4}/>
            </div>
        </div>
      </div>
      <div className={classes.padding_sm}></div>
    </div>
  )
}

export default PopularSubjects;

