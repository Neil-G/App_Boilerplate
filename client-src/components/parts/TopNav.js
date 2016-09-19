// @flow

import React, { Component } from 'react';


const style = { position: 'fixed', border: '1px solid tomato', top: '0', left: '90px', right: '0', height: '60px' }

class TopNav extends Component {
  render() {
    return (
      <nav style={style} >
        TopNav
      </nav>
    );
  }
}

export default TopNav
