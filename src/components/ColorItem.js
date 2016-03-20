import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect} from 'react-redux';
import Color from 'lib/color';
import {merge} from 'utils/shared';
import styles from 'components/ColorItem.style';
import {removeColor, alterColor} from 'actions/index';


class ColorItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    console.log('here are my props:', props);
  }
  onSubmit(fields) {
    this.props.alterColor(this.props.idx, fields);
  }
  handleFocus(e) {
    e.target.select();
  }
  handleEnter(e) {
    if (e.key == 'enter') {
      this.onSubmit();
    }
  }
  onRemove(e) {
    this.props.removeColor(this.props.idx);
  }

  render() {
    const myInitialValues = {
      initialValues: {
        hex: '#000000',
        red: 0,
        green: 0,
        blue: 0,
        tone: 0,
        black: 100,
        white: 0
      }
    }
    //all these as well as action creator are now avail as props
    const { fields: {hex, red, green, blue, black, white, tone}, handleSubmit } = this.props;
    // this.vals = this.loadVals(this.props.color);
    let colorstyle = {
      backgroundColor: this.props.hex,
      color: this.props.color.light() ? 'black' : 'white'
    };

    return (
      <form {...myInitialValues}
            style={styles.form}
            onSubmit={handleSubmit(this.onSubmit)}>

        <div style={styles.controlGroup}>
          <small>Color Code </small>
          <input  type="text"
                  style={styles.input}
                  {...hex} />
         </div>

        <div style={merge(styles.colorBlock, colorstyle)} >
            <span>{this.props.hex}</span>
            <button style={styles.removeBtn} onClick={this.onRemove}>Remove</button>
        </div>

        <div style={styles.valueBlock}>
              <div style={styles.valueGroup}>
                <div style={styles.vals}>
                  <span style={styles.vallabel}>red</span>
                  <input type="text" {...red}
                          id="red"
                          style={styles.valinput}
                          onFocus={this.handleFocus}
                          onKeyPress={this.handleEnter}/>
                </div>
              </div>
        </div>

      </form>
    );
  }
}


export default reduxForm(
  {
  form: 'ColorForm',
  fields: ['idx','hex','red','green','blue','tone','black','white']
  },
  null,
  {removeColor, alterColor})(ColorItem);
  //1st arg: form config,
  //2nd arg: mapStateToProps
  //3rd arg: mapDispatchToProps
