import React, { Component } from "react";
import classes from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import traing_logo from "../../img/TR.jpg";

export default class NavBar extends Component {
  state = {
    down: false,
    dropDownEnter: false,
    search: true
  };
  enter = e => {
    this.setState({ down: true });
    const dropDown = e.target;
    e.target.classList.add("ccc");
  };

  leave = e => {
    let curr = this.state.down;
    this.setState({ down: false });
    e.target.classList.remove("ccc");
  };
  searchOpen = () => {
    this.setState({ search: false });
    this.props.searchOpen();
  };
  searchClose = () => {
    this.setState({ search: true });
    this.props.searchClose();
  };
  render() {
    let container;
    let dropDown;
    if (this.state.down) {
      container = (
        <FontAwesomeIcon
          icon={["fas", "chevron-up"]}
          className={classes.downIcon}
        />
      );
      dropDown = (
        <ul className={classes.dropdown}>
          <li>ALL COURSES</li>
          <li>HEALTH & SAFETY</li>
          <li>HACPP</li>
          <li>FIRST AID</li>
        </ul>
      );
    } else {
      container = (
        <FontAwesomeIcon
          icon={["fas", "chevron-down"]}
          className={classes.downIcon}
        />
      );
      dropDown = null;
    }
    return (
      <nav className={classes.navContainer}>
        <div className={classes.nav}>
          <div className={classes.logo}>
            <img
              src="https://www.trainingexpress.org.uk/wp-content/uploads/2019/05/logo-final-1.png"
              id="header_logo"
              alt="Training Express"
              style={{ width: "95%" }}
            />
          </div>
          <ul className={classes.navItem}>
            <li
              className={classes.item1}
              onMouseOver={this.enter}
              onMouseOut={this.leave}
            >
              <a>Courses</a>
              {container}
              <ul className={classes.dropdown}>
                <li>All Courses</li>
                <li>HEALTH & SAFETY</li>
                <li>HACPP</li>
                <li>FIRST AID</li>
              </ul>
            </li>
            <li className={classes.course}>Training Teams</li>
            <li className={classes.course}>Help</li>
            <li className={classes.course}>Contact</li>
          </ul>

          <div className={classes.search}>
            <FontAwesomeIcon
              icon={["fas", "search"]}
              transform="grow-1"
              className={classes.searchIcon}
            />
            <input
              type="text"
              placeholder="What do you want to know ?"
              className={classes.input}
            />
          </div>
          {this.state.search && (
            <FontAwesomeIcon
              icon={["fas", "search"]}
              transform="grow-2"
              className={classes.searchIconForSmallScreen}
              onClick={this.searchOpen}
            />
          )}
          {!this.state.search && (
            <div
              className={[classes.menu_btn, classes.close].join(" ")}
              onClick={this.searchClose}
            >
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
            </div>
          )}

          <div className={classes.signinsignup}>
            <button className={classes.login}>Login</button>
            <button className={classes.signUp}>Sign Up</button>
          </div>
        </div>
      </nav>
    );
  }
}
