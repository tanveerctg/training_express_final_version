import React, { Component } from "react";
import classes from "./Layout.module.scss";
import NavBar from "../NavBar/NavBar";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Modal from "../Modal/Modal";
import ModalSearch from "../ModalSearch/ModalSearch";

export default class Layout extends Component {
  state = {
    toggle: false,
    hamburgerToggle: false,
    search: false
  };
  hamburgerToggle = () => {
    const prev = this.state.hamburgerToggle;
    this.setState({ hamburgerToggle: !prev });
  };
  searchOpen = () => {
    this.setState({ search: true });
  };
  searchClose = () => {
    this.setState({ search: false });
  };
  render() {
    console.log("SEARCH", this.state.search);
    console.log("hamburger", this.state.hamburgerToggle);
    return (
      <div>
        <HamburgerIcon
          hamburgerToggle={this.hamburgerToggle}
          on={this.state.hamburgerToggle}
        />
        <Modal on={this.state.hamburgerToggle} toggle={this.hamburgerToggle} />
        <ModalSearch on={this.state.search} />
        <NavBar searchOpen={this.searchOpen} searchClose={this.searchClose} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
