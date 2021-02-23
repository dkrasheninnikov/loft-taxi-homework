import React, { Component } from "react";
import Main from "./Pages/Main";
import Map from "./Pages/Map";
import { pages } from "./config";

class App extends Component {
  state = {
    currentPage: pages.MAP,
  };
  setPage = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { currentPage } = this.state;
    return (
      <>
        {
          {
            [pages.LOGIN]: (
              <Main setPage={this.setPage} currentPage={currentPage} />
            ),
            [pages.REGISTRATION]: (
              <Main setPage={this.setPage} currentPage={currentPage} />
            ),
            [pages.MAP]: (
              <Map setPage={this.setPage} currentPage={currentPage} />
            ),
            [pages.PROFILE]: (
              <Map setPage={this.setPage} currentPage={currentPage} />
            ),
          }[currentPage]
        }
      </>
    );
  }
}

export default App;
