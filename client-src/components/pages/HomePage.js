// @flow

import React, { Component } from 'react';


const style = { position: 'fixed', border: '1px solid tomato', top: '60px', bottom: '0', left: '90px', right: '0' }


class HomePage extends Component {
  render() {
    return (
      <div style={style}>
        <h1>HomePage</h1>
      </div>
    );
  }
}

export default HomePage
