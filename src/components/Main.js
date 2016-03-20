import React, {Component} from 'react';
import {merge} from 'utils/shared';
import colors from 'styles/colors';

const styles = {
  me: {
    flex: '1 1 100%'
  }
};


class Main extends Component {
  render() {
    return (
      <div style={merge(colors.main, styles.me)}>
        {this.props.children}
      </div>
    );
  }

}


export default Main;
