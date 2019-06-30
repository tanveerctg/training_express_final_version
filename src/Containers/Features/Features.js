import React from 'react';
import classes from './Features.module.scss';
import bg from '../../img/wave.png';


export default function Features() {

    
    return (
        <div  className={classes.container}>

            <div className={classes.wrapper}>

                <div className={classes.firstPart}>

                    <div className={classes.firstPartWrapper}>
                        <section className={classes.firstSection}>
                            <div className={classes.firstAid}>
                                <div className={classes.icon}>
                                    <img src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/first-aid-kit.png"/>
                                </div>
                                <h2 className={classes.categoryName}>
                                    First Aid
                                </h2>
                                <div className={classes.categoryDetails}>
                                    Explore our comprehensive library of accredited first aid online training courses.
                                </div> 
                            </div>
                            <div className={classes.safeGuarding}>
                                <div className={classes.icon}>
                                    <img src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/Safeguarding.png"/>
                                </div>
                                <h2 className={classes.categoryName}>
                                    Safeguarding
                                </h2>
                                <div className={classes.categoryDetails}>
                                Study the principles of safeguarding children and vulnerable adults, with courses of all levels.
                                </div>
                               
                            </div>
                        </section>
                        <section className={classes.secondSection}>
                            <div className={classes.health}>
                                <div className={classes.icon}>
                                    <img src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/Health-Safety.png"/>
                                </div>
                                <h2 className={classes.categoryName}>
                                    Health and Safety
                                </h2>
                                <div className={classes.categoryDetails}>
                                    Workplace training covering fire safety, risk management, manual handling and more.
                                </div> 
                            </div>
                            <div className={classes.foodHygiene}>
                            <div className={classes.icon}>
                                    <img src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/Food-Hygiene.png"/>
                                </div>
                                <h2 className={classes.categoryName}>
                                    Food Hygiene
                                </h2>
                                <div className={classes.categoryDetails}>
                                    Browse our extensive online range of certified food hygiene and safety training courses.
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

                <div className={classes.secondPart}>

                    <div className={classes.secondPartWrapper}>
                      <h1 className={classes.title}>Why coose us</h1>
                      <div className={classes.points}>
                        <div className={classes.paragraph}>
                            <p>Our trusted, high quality and affordable online courses are designed to train individuals to become experts in their field</p>
                        </div>
                        <ul className={classes.features}>
                            <li>Accredited Certification</li>
                            <li>Meets UK EU Standards</li>
                            <li>Developed by Qualified Professionals</li>
                            <li>Engaging Audio Visual Training</li>
                            <li>Instant Course Access</li>
                            <li>Study Wherever, Whenever</li>
                            <li>Instant Digital Certificate</li>
                            <li>Premium Support: Live Chat, Email, Telephone</li>
                        </ul>
                      </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
