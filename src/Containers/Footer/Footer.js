import React, { Component } from "react";
import classes from "./Footer.module.scss";
import fb from "./fb.png";
import pinterest from "./pinterest.png";
import twitter from "./twitter.png";
import { fbind } from "q";

export default class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={classes.wrapper}>
          <div className={classes.allLinksContainer}>
            <div className={classes.allLinks}>
              <p className={classes.link}>About Us</p>
              <p className={classes.link}>Courses</p>
              <p className={classes.link}>Training Teams</p>
              <p className={classes.link}>Terms and Policies</p>
              <p className={classes.link}>Contact</p>
              <p className={classes.link}>Blogs</p>
            </div>
          </div>

          <div className={classes.socialMedia}>
            <div className={classes.socialMediaImgContainer}>
              <img src={fb} className={classes.socialImg} />
            </div>
            <div className={classes.socialMediaImgContainer}>
              <img src={pinterest} className={classes.socialImg} />
            </div>
            <div className={classes.socialMediaImgContainer}>
              <img src={twitter} className={classes.socialImg} />
            </div>
          </div>

          <div className={classes.logo}>
            <div className={classes.wrapperLogo}>
              <div className={classes.logoContainer}>
                <img
                  src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/05/Training-Express-logo-04.png"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className={classes.address}>
                <p>Professional, Reliable Audio Visual Training</p>
                <p>14 CUMBERLAND AVENUE, LONDON, NW10 7QL</p>
                <p>020 8158 3412</p>
              </div>
            </div>
          </div>
          <div className={classes.copyright}>
            Copyright &copy; 2019 Training Express
          </div>
        </div>
      </div>
    );
  }
}
