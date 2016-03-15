import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWindowSize, toggleBorders } from 'actions/index';
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
      <div>
        {this.props.children}
        <div id="toolbox" >
           <br/>Window Size is: {this.props.winSize} (Change in actions/index)
           <br/><button onClick={this.handleBorders}>Borders</button>
       </div>
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
