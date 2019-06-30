import React, { Component } from "react";
import Portal from "../Portal/Portal";
import { Transition, config } from "react-spring/renderprops";
import classes from "./Modal.module.scss";

class Modal extends Component {
  render() {
    const { on } = this.props;
    return (
      <React.Fragment>
        <Transition
          items={on}
          from={{ opacity: 0, height: 10 }}
          enter={{ opacity: 1, height: 100 }}
          leave={{ opacity: 0, height: 0 }}
          config={config.gentle}
        >
          {on =>
            on &&
            (props => (
              <Portal>
                <div
                  className={classes.hamburgerModal}
                  style={{
                    height: `${props.height}vh`,
                    opacity: props.opacity
                  }}
                >
                  <h2
                    style={{
                      opacity: props.opacity,
                      transitionDelay: ".4s",
                      transition: "opacity .3s"
                    }}
                  >
                    Courses
                  </h2>
                  <h2
                    style={{
                      opacity: props.opacity,
                      transitionDelay: ".4s",
                      transition: "opacity .3s"
                    }}
                  >
                    Training Teams
                  </h2>
                  <h2
                    style={{
                      opacity: props.opacity,
                      transitionDelay: ".5s",
                      transition: "opacity .3s"
                    }}
                  >
                    Help
                  </h2>

                  <h2
                    style={{
                      opacity: props.opacity,
                      transitionDelay: ".6s",
                      transition: "opacity .3s"
                    }}
                  >
                    Contact
                  </h2>
                  <h2
                    style={{
                      opacity: props.opacity,
                      transitionDelay: ".7s",
                      transition: "opacity .3s"
                    }}
                  >
                    Login
                  </h2>

                  <h2
                    style={{
                      opacity: props.opacity,
                      transitionDelay: ".7s",
                      transition: "opacity .3s"
                    }}
                  >
                    Sign Up
                  </h2>
                </div>
              </Portal>
            ))
          }
        </Transition>
      </React.Fragment>
    );
  }
}

export default Modal;
