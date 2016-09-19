// @flow

import React, { Component } from 'react';
import Parts from './components/parts'


class App extends Component {
  render() {
    return (
      <div>
        <Parts.TopNav />
        <Parts.SideNav />
        {this.props.children}
      </div>
    );
  }
}

export default App
