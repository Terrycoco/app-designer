import React, {Component} from 'react';
import styles from 'components/Button.style';
import {merge} from 'utils/shared';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {isDepressed: false, isHover: false};
    // this.handleClick = this.handleClick.bind(this);
    this.hover = this.hover.bind(this);
    this.unhover = this.unhover.bind(this);
  }
  hover(e) {
    this.setState({isHover: true});
  }
  unhover(e) {
    this.setState({isHover: false});
  }
  render() {
    return (
      <div style={merge(styles.container, this.props.style, this.state.isHover && styles.hover)} onMouseOver={this.hover} onMouseLeave={this.unhover}>{this.props.children}</div>
    );
  }
}

Button.propTypes = {
  style: React.PropTypes.object //call site can override if want to
};

export default Button;
