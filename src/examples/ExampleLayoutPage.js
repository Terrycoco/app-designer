var classnames = require('classnames');
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header.js';
import Nav from 'components/Nav.js';
import ExPage from 'examples/exampleContent.js';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styles = {
      border: 'thin solid red'
    };

    let container, s1, main, s2, nav = null;
    switch (this.props.winSize) {
      //small all 100%
      case 1: {
        container = 'col-container';
        s1 = classnames('full');
        main = 'full';
        s2 = 'full';
        break;
     }
      case 2: {
        container = 'col-container';
        s1 = 'quarter';
        main = 'rest';
        s2 = 'full';
        break;
      }
      case 3: {
        container = 'col-container';
        s1 = 'third';
        main = 'rest';
        s2 = 'full';
        break;
      }
      default:
        container = 'col-container';
        s1 = 'third';
        main = 'rest';
        s2 = 'third';
      };

    return (
      <div id="page" className='row-container' style={styles}>
       <Header winSize={this.props.winSize} id="header" style={styles}/>
       <Nav id="nav" winSize={this.props.winSize} />
       <div id="content-container" className={container} style={styles}>
          <ExPage id="side1" className={s1} style={styles}/>
          <ExPage id="main" className={main} style={styles}/>
          <ExPage id="side2" className={s2} style={styles}/>
       </div>
      <div id="footer" style={styles}><h2>This is the footer</h2></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    winSize: state.app.windowSize,
    border: state.app.borders
  };
}

export default connect(mapStateToProps)(Page);
