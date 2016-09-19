// @flow

import React, { Component } from 'react';


const style = { position: 'fixed', border: '1px solid tomato', top: '0', bottom: '0', left: '0',  width: '90px' }

class SideNav extends Component {
  render() {
    return (
      <nav style={style} >
        SideNav
      </nav>
    );
  }
}

export default SideNav
