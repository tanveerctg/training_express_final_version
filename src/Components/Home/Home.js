import React, { Component } from "react";
import classes from "./Home.module.scss";
import whiteBg from "../../img/WHITEBG.jpg";
import slogan from "../../img/sloganBlack.png";
// import "../../node_modules/video-react/dist/video-react.css";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

export default class Home extends Component {
  render() {
    return (
      <div className={classes.home}>
        <div className={classes.firstPart}>
          <div className={classes.firstPartInfo}>
            <div className={classes.sloganContainer}>
              <img src={slogan} className={classes.slogan} />
              <p className={classes.sloganText}>
                Join the growing community of learners gaining new skills and
                accredited qualifications at <strong>Training Express.</strong>
              </p>
            </div>
            <div className={classes.allCourses}>
              <button className={classes.button}>Browse Our Courses</button>
              <svg
                width="27"
                height="23"
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.arrow}
              >
                <path
                  d="M4.85266 4.62151C4.06166 7.46106 3.97967 10.4193 3.23929 13.0772C2.96069 14.0773 1.67325 16.805 2.09211 17.7873C2.3812 18.4653 2.76772 18.8352 3.21231 18.9723M3.21231 18.9723C4.86336 19.4811 7.31515 16.7777 8.55092 14.7076M3.21231 18.9723C4.09992 18.0084 5.20831 16.9763 5.56023 16.7333C6.55447 16.0467 7.55354 15.3745 8.55092 14.7076M3.21231 18.9723C2.48348 19.7637 1.9035 20.5091 2.01342 20.7338C2.74616 22.2316 5.14765 20.5766 6.01661 20.5709C9.69609 20.5465 12.9747 20.2417 16.55 21.2376M8.55092 14.7076C8.64303 14.5533 8.7284 14.4025 8.80616 14.2569C10.1818 11.68 15.4058 7.95343 18.0723 6.44883C20.3914 5.14027 22.3609 3.44856 24.6721 2.14445C26.1048 1.33606 22.4223 4.15243 21.6896 4.85917C17.7838 8.62687 13.1857 11.609 8.55092 14.7076Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="172"
                height="63"
                viewBox="0 0 172 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.text}
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M16.4833 31.3773C13.3575 31.9634 10.1123 33.131 11.2226 37.0168C11.4915 37.958 16.7323 37.4377 17.6618 37.4377C20.2737 37.4377 19.9776 40.9377 19.3452 42.993C18.6976 45.0979 15.1195 44.2556 13.4531 44.2556M24.0589 26.0744C24.8737 31.3709 25.32 36.1676 26.3315 41.2254M18.756 35.9226C23.3917 33.6974 26.6689 33.6499 31.6344 33.6499M34.7745 32.1348C34.7672 32.1572 34.7594 32.1804 34.7512 32.2046M34.7512 32.2046C34.1854 33.8611 31.4353 39.7103 34.7745 39.7103C44.2858 39.7103 42.6842 32.9664 34.7512 32.2046ZM34.7512 32.2046C34.2763 32.159 33.7787 32.1348 33.2594 32.1348M41.4826 34.4075C44.6203 35.785 47.0166 38.1952 50.5732 38.1952M49.0581 28.347C49.3646 29.7777 50.0042 31.4185 50.5269 33.051M50.5269 33.051C50.971 34.4376 51.3307 35.8182 51.3307 37.0589C51.3307 38.2014 52.3546 41.1728 52.0883 40.8887C50.5596 39.2581 50.4766 35.8476 50.5269 33.051ZM50.5269 33.051C50.5432 32.1502 50.5732 31.3131 50.5732 30.6197C50.5732 29.0422 50.5288 27.8987 51.3307 26.4953C51.8025 25.6696 55.0011 25.775 55.1185 26.8319C55.2783 28.2703 54.3609 35.7479 54.3609 32.1348M59.6638 16.9838C60.3424 22.8367 59.8679 30.8238 64.2091 35.165M55.876 28.347C58.4978 27.8751 61.2258 27.5582 63.4516 26.0744M72.5422 15.4687C73.3278 20.2805 72.6246 25.4816 74.8148 29.8621M81.6328 23.8017C83.9913 21.9436 88.3723 16.7685 82.5587 16.9838C79.7394 17.0882 77.9598 22.2643 77.8451 24.5593C77.6089 29.2815 85.3926 29.6283 88.4508 27.5895M96.0263 16.2262C92.2076 18.1745 91.1553 18.9837 89.545 22.7075C89.0187 23.9246 88.4983 26.8319 90.3447 26.8319C93.3319 26.8319 95.2687 26.0747 95.2687 22.6654C95.2687 19.8227 94.1336 15.8702 96.7839 19.8456C98.8905 23.0057 100.173 22.0206 102.844 23.8017M102.844 14.7111C104.12 17.7867 107.39 22.9661 107.39 26.369V18.1622C107.39 14.7738 106.655 13.196 110.42 13.196C113.375 13.196 115.007 17.7309 111.935 18.4989M117.995 14.7111C117.995 15.142 117.661 23.9352 119.09 21.487C120.302 19.4094 120.702 17.0216 122.204 15.0899C126.627 9.40367 127.086 18.6147 127.086 21.5291M130.116 13.196C130.686 16.1889 131.681 18.6962 132.389 21.5291M124.056 4.86294C126.225 6.97953 131.696 10.6161 128.601 5.19963C127.629 3.49797 125.023 4.10539 123.298 4.10539M134.661 13.196C135.132 14.3144 137.692 21.8086 137.692 20.3507C137.692 18.1337 137.634 15.7233 139.207 13.9536C143.761 8.83032 143.236 16.7087 144.51 19.2564M155.935 8.07146C154.857 9.15979 144.774 17.2626 151.657 18.7677C154.103 19.3028 154.851 17.6299 155.243 15.6112M155.243 15.6112C155.457 14.5109 155.565 13.3078 155.784 12.3036L156.018 11.2347C155.667 12.839 155.271 14.2046 155.243 15.6112ZM155.243 15.6112C155.225 16.5463 155.368 17.4995 155.796 18.553C156.246 19.6612 156.316 21.2469 156.189 22.9664M156.189 22.9664C155.972 25.9091 155.181 29.2437 154.743 31.247C153.668 36.1653 154.161 37.1509 149.003 36.0229C145.417 35.2386 143.696 32.1181 144.499 28.4466C144.852 26.8319 144.982 24.7412 145.993 23.3882C147.155 21.8349 149.457 23.0329 151.181 22.7134C152.398 22.488 154.298 22.6669 156.189 22.9664ZM156.189 22.9664C158.007 23.2545 159.817 23.6542 161 23.913M103.602 14.7111C104.472 16.9417 106.632 22.1941 106.632 24.5593V18.1201C106.632 14.3254 106.008 13.196 110.041 13.196C113.197 13.196 114.175 18.4989 110.42 18.4989M47.543 26.0744C47.7232 26.9978 47.9636 28.4357 48.2211 29.9555M48.2211 29.9555C48.8856 33.878 49.6642 38.346 49.8156 35.9226C49.9453 33.8472 49.209 31.8026 48.2211 29.9555ZM48.2211 29.9555C47.7749 29.1215 47.2775 28.3277 46.7854 27.5895M156.63 7.89315L155.873 11.6809M157.388 8.6507C155.765 13.7241 155.873 29.8861 155.873 24.5593V10.9234"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-1.52588e-05"
                    y="2.28882e-05"
                    width="172"
                    height="62.422"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="7" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className={classes.secondPart}>
          <div className={classes.videoContainer}>
            <Player
              playsInline
              poster="https://www.trainingexpress.org.uk/wp-content/uploads/elementor/thumbs/ezgif.com-webp-to-jpg-o7v0v0rf50olgllsgk5azmds36y1apcdapji2hq8mo.jpg"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div>
        </div>
      </div>
    );
  }
}
