import React, { Component } from 'react';
import { merge } from 'utils/shared';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '.65em',
    justifyContent: 'stretch'
  },
  channel: {
    display: 'flex',
    minWidth: '3em',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid grey',
    alignItems: 'center'
  },
  slider: {
    flex: 1,
    width: '100%'
  },
  val: {
   maxWidth: '3em',
   textAlign: 'center'
 },
 alpha: {
   flex: 1,
   width: '100%'
 }
}


class Slider extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let val = e.target.value;
    this.props.onChange(this.props.idx, this.props.name, val);
  }

 render() {
    let clr = "";
    let r,g,b,a;
    switch(this.props.name) {
      case "red": {
        clr = 'linear-gradient(to right, black, #ff0000)';
        break
      }
      case "green": {
        clr = 'linear-gradient(to right, black, #00ff00)';
        break;
      }
      case "blue": {
        clr = 'linear-gradient(to right, black, #0000ff)';
        break;
      }
      case "alpha": {
        r = this.props.colorObj.red;
        g = this.props.colorObj.green;
        b = this.props.colorObj.blue;
        clr = `linear-gradient(to right, rgba(${r},${g},${b}, 0), ${this.props.colorObj.hex})`;
        break;
      }
      case "light": {
        clr = `linear-gradient(to right, black, white)`;
      }

    }
    let colorstyle = {
      background: clr,
      color: this.props.colorObj.textColor
    };
    return (
      <div style={styles.container}>
        <span style={styles.channel}>{this.props.name}</span>
        <span style style={merge(styles.slider, colorstyle)} >
        <input style={styles.slider} key={this.props.key} type="range" idx={this.props.idx}  min={this.props.min} max={this.props.max} value={this.props.value} step={this.props.step}  onChange={this.handleChange}/>
        </span>
        <input onChange={this.handleChange} style={styles.val} type="text" value={this.props.value} />
      </div>
    );
  }
}

export default Slider;
