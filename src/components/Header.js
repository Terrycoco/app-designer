import React, { Component } from 'react';
import Button from 'components/Button';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={this.props.id} >
      <h1>Win Size: {this.props.winSize}</h1>
      <Button>BUTTON CLICK ME!</Button>
      </div>
    );
  }
}

export default Header;
