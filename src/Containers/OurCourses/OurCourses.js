import React, { Component } from "react";
import classes from "./OurCourses.module.scss";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class OurCourses extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={classes.container}>
        <h1 className={classes.title}>Our Courses</h1>
        <div className={classes.wrapper}>
          <Slider {...settings}>
            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.tag}>POPULAR</span>
                  <span className={classes.courseCategory}>Food Hygiene</span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Level-2-Food-Hygiene-and-Safety-for-Catering-460x276.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Level 2 Food Hygiene and Safety for Catering
                  </div>
                  <div className={classes.price}>£15.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>5 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.new}>NEW</span>
                  <span className={classes.courseCategory}>
                    Health and Safety
                  </span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/03/15-Asbestos-Awareness-Category-A-Training-Course-310x186.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Asbestos Awareness Training
                  </div>
                  <div className={classes.price}>£20.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star-half"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>4.9 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.tag}>POPULAR</span>
                  <span className={classes.courseCategory}>
                    Health and Safety
                  </span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/03/15-Asbestos-Awareness-Category-A-Training-Course-310x186.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Asbestos Awareness Training
                  </div>
                  <div className={classes.price}>£20.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star-half"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>4.9 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.tag}>POPULAR</span>
                  <span className={classes.courseCategory}>
                    Health and Safety
                  </span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/03/15-Asbestos-Awareness-Category-A-Training-Course-310x186.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Asbestos Awareness Training
                  </div>
                  <div className={classes.price}>£20.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star-half"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>4.9 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.tag}>POPULAR</span>
                  <span className={classes.courseCategory}>
                    Health and Safety
                  </span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/03/15-Asbestos-Awareness-Category-A-Training-Course-310x186.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Asbestos Awareness Training
                  </div>
                  <div className={classes.price}>£20.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star-half"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>4.9 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.tag}>POPULAR</span>
                  <span className={classes.courseCategory}>
                    Health and Safety
                  </span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/03/15-Asbestos-Awareness-Category-A-Training-Course-310x186.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Asbestos Awareness Training
                  </div>
                  <div className={classes.price}>£20.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star-half"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>4.9 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.tag}>POPULAR</span>
                  <span className={classes.courseCategory}>
                    Health and Safety
                  </span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/03/15-Asbestos-Awareness-Category-A-Training-Course-310x186.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Asbestos Awareness Training
                  </div>
                  <div className={classes.price}>£20.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star-half"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>4.9 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.tag}>POPULAR</span>
                  <span className={classes.courseCategory}>Food Hygiene</span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Level-2-Food-Hygiene-and-Safety-for-Catering-460x276.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Level 2 Food Hygiene and Safety for Catering
                  </div>
                  <div className={classes.price}>£15.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>5 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                  <span className={classes.tag}>POPULAR</span>
                  <span className={classes.courseCategory}>Food Hygiene</span>
                  <img
                    src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/04/Level-2-Food-Hygiene-and-Safety-for-Catering-460x276.jpg"
                    className={classes.img}
                  />
                </div>
                <div className={classes.secondPart}>
                  <div className={classes.courseName}>
                    Level 2 Food Hygiene and Safety for Catering
                  </div>
                  <div className={classes.price}>£15.00</div>
                  <div className={classes.rating}>
                    <div className={classes.stars}>
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                      <FontAwesomeIcon
                        icon={["fas", "star"]}
                        className={classes.starIcon}
                      />
                    </div>
                    <div className={classes.numberOfPeople}>5 (14,109)</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
