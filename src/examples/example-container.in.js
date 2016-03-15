//container that needs state in
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChildComponent from '../components/example-component';

class Example extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  //what's returned here is pass as prop to wired container object
   return {
     somekey: state.somekey
   };
}

export default connect(mapStateToProps)(Example);
