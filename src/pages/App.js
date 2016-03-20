import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWindowSize, toggleBorders } from 'actions/index';
import colors from 'styles/colors';
import {merge} from 'utils/shared';
import StickyFooter from 'components/StickyFooter';
import Header from 'components/Header';
import Main from 'components/Main';


const styles = {
  me: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
};


//put anything you want displayed on ALL pages here
class App extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.handleBorders = this.handleBorders.bind(this);
  }
  handleResize(e) {
    this.props.setWindowSize(window.innerWidth);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleBorders(){
    this.props.toggleBorders((this.props.borders == 'none') ? true : false);
  }

  render() {
    return  (
      <div style={merge(styles.me)} >
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    winSize: state.app.windowSize,
    borders: state.app.borders
  };
}

export default connect(mapStateToProps, { setWindowSize, toggleBorders })(App);
