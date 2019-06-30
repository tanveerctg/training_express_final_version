import React, { Component } from "react";
import SearchPortal from "../SearchPortal/SearchPortal";
import { Transition, config } from "react-spring/renderprops";
import classes from "./ModalSearch.module.scss";

class ModalSearch extends Component {
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
              <SearchPortal>
                <div
                  className={classes.hamburgerModal}
                  style={{
                    height: `${props.height}vh`,
                    opacity: props.opacity
                  }}
                >
                  <div className={classes.searchWrapper}>
                    <input
                      placeholder="What do you want to know?"
                      className={classes.input}
                      // autofocus="autofocus"
                    />
                    <button className={classes.searchBtn}>Search</button>
                  </div>
                </div>
              </SearchPortal>
            ))
          }
        </Transition>
      </React.Fragment>
    );
  }
}

export default ModalSearch;
