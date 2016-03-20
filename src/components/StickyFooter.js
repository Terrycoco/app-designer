import React, {Component} from 'react';
import {merge} from 'utils/shared';
import colors from 'styles/colors';

const styles = {
  me: {
    alignSelf: 'flex-end',
    width: '100%',
    order: '99'
  }
};


class StickyFooter extends Component {
  render() {
    return (
      <footer style={merge(colors.footer, styles.me)}>
        {this.props.children}
      </footer>
    );
  }

}


export default StickyFooter;
