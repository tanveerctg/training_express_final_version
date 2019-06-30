import React, { Component } from "react";
import classes from "./PopularCompanies.module.scss";

export default class PopularCompanies extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.slider}>
          <div className={classes.slide_track}>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Nhs.jpg"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Marksnspencher.jpg"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/logo005.png"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/logo006.png"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Benx.jpg"
                alt=""
                className={classes.img}
              />
            </div>

            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Nhs.jpg"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Marksnspencher.jpg"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/logo006.png"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/logo005.png"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/logo006.png"
                alt=""
                className={classes.img}
              />
            </div>
            {/* <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/logo005.png"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/06/logo006.png"
                alt=""
                className={classes.img}
              />
            </div>
            <div className={classes.slide}>
              <img
                src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Benx.jpg"
                alt=""
                className={classes.img}
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
