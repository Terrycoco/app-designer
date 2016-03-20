import React, {Component} from 'react';
import Slider from 'components/Slider';
import Utils, { merge } from 'utils/shared';
import Transition from 'react-motion-ui-pack';
import {spring} from 'react-motion';

const styles = {
  container: {
    flex: '1 0 20%',
    display: 'flex',
    flexDirection: 'column',
    wrap: 'nowrap',
    fontFamily: 'Verdana, Arial, sans-serif'
  },
  colorBlock:{
    flex: '1',
    minHeight: '10em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
    swatchMenu: {
      alignSelf: 'flex-start',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
        X: {
          alignSelf: 'flex-end',
          fontSize: '.9em',
          fontWeight: 'bold',
          marginRight: '.5em'
        },
        swatchEdit: {
        },
        swatchTitle: {
          alignSelf: 'flex-start',
          fontSize: '.9em',
          marginLeft: '.5em'
        },
    inputBlock: {
      alignSelf: 'flex-end',
      paddingRight: '.5em',
      paddingBottom: '.3em',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'stretch',
      alignItems: 'center',
      },

            label: {
              fontSize: '.6em',
              marginRight: '.5em',
              marginLeft: '.5em'
            },
            input: {
              fontSize: '.7em',
              width: '30%',
              backgroundColor: 'white',
              color: 'black',
              textAlign: 'center'
          },
          clone: {
            marginLeft: '.5em'
          }
};

class ColorForm extends Component {
  constructor(props) {
    super(props);
    this.callChange = this.callChange.bind(this);
    this.selectField = this.selectField.bind(this);
    this.callRemove = this.callRemove.bind(this);
    this.callSelect = this.callSelect.bind(this);
    this.callClone = this.callClone.bind(this);
    this.callLock = this.callLock.bind(this);
  }
  callChange(e) {
    let val = e.target.value;
    if (e.target.name === "hex") {
      Utils.debounce(this.props.handleChange(this.props.idx, "hex", val), 1000);

    } else if (e.target.name === "colorname") {
      Utils.debounce(this.props.handleChange(this.props.idx, "colorname", val), 1000);
    } else {
      this.props.handleChange(this.props.idx, e.target.name, val);
    }

  }
  callSelect(e) {
    this.props.handleSelect(this.props.idx, this.props.unique);
  }
  callRemove(e) {
    this.props.handleRemove(this.props.idx);
  }
  callClone(e) {
    this.props.handleClone(this.props.idx);
  }
  callLock(e){
    this.props.onLock(this.props.idx);
  }
  selectField(e) {
    e.target.select();
  }
  shouldComponentUpdate() {
    return true;
  }

  fetchSliderStyles() {
    if (this.props.isLocked) {
      return styles.sliderLocked;
    } else {
      return styles.sliderUnlocked;
    }
  }
  render() {
      let alphanew = (this.props.colorObj.alpha - 0.25).toFixed(3);
      let bg = `rgba(${this.props.colorObj.red}, ${this.props.colorObj.green}, ${this.props.colorObj.blue}, ${this.props.colorObj.alpha})`;
      let textcolor = this.props.colorObj.textColor;
      let menubar =  `rgba(${this.props.colorObj.red}, ${this.props.colorObj.green}, ${this.props.colorObj.blue}, ${alphanew})`;
      let selected = this.props.isSelected ? {border: '2px solid black'} : {border: '2px solid white'};
    return (
      <div style={merge(styles.container)}>
        <div style={merge(styles.colorBlock, {background: bg, color: textcolor}, selected)} onClick={this.callSelect}>
              <div style={merge(styles.swatchMenu, {background: menubar, color: textcolor})}>
                <span style={merge(styles.clone, {color: textcolor})}
                      className={(this.props.isLocked) ? "fa fa-lock" : "fa fa-unlock"}
                      onClick={this.callLock}></span>
                <span style={styles.swatchTitle}>{this.props.unique}</span>
                <span style={merge(styles.X, {color: textcolor})} onClick={this.callRemove} >x</span>
              </div>
              <div style={merge(styles.inputBlock, {background: menubar, color: textcolor})} >
                    <label style={styles.label}>Hex</label>
                    <input  style={styles.input}
                            key={'H' + this.props.idx}
                            maxLength="7"
                            minLength="7"
                            name="hex"
                            type="text"
                            value={this.props.hexInput}
                            onChange={this.callChange}
                            onFocus = {this.selectField} />
                  <label style={styles.label}>Name</label>
                  <input  style={styles.input}
                          key={'N' + this.props.idx}
                          name="colorname"
                          type="text"
                          value={this.props.colornameInput}
                          onChange={this.callChange}
                          onFocus = {this.selectField} />
                    <span style={merge(styles.clone, {color: textcolor})}
                          className="fa fa-arrow-right"
                          onClick={this.callClone}></span>
                </div>
          </div>
        <Transition component={false}
                    enter={{
                      opacity: 1,
                      translateY: spring(0, {stiffness: 1000, damping:100})
                    }}
                    leave={{
                      opacity: 0,
                      translateY: -200
                    }}>
          {!this.props.isLocked &&
                <div key={this.props.idx+'s'}>
                   <Slider name="red" key={this.props.idx+'r'} idx={this.props.idx} min="0" max="255" step="1" value={this.props.colorObj.red} onChange={this.props.handleChange} colorObj={this.props.colorObj}/>
                   <Slider name="green" key={this.props.idx+'g'} idx={this.props.idx} min="0" max="255" step="1" value={this.props.colorObj.green} onChange={this.props.handleChange} colorObj={this.props.colorObj}/>
                   <Slider name="blue" key={this.props.idx+'b'} idx={this.props.idx} min="0" max="255" step="1" value={this.props.colorObj.blue} onChange={this.props.handleChange} colorObj={this.props.colorObj}/>
                   <Slider name="light" key={this.props.idx+'l'} idx={this.props.idx} min="0" max="255" step="1" value={this.props.colorObj.light} onChange={this.props.handleChange} colorObj={this.props.colorObj}/>
                  <Slider name="alpha" key={this.props.idx+'a'} idx={this.props.idx} min=".001" max="1" step=".001" value={this.props.colorObj.alpha} onChange={this.props.handleChange} colorObj={this.props.colorObj}/>
                </div>
          }

        </Transition>
      </div>

    );
  }
}

// ColorForm.propTypes = {
//   hex: React.PropTypes.string,
//   colorname: React.PropTypes.string,
//   colorObj: React.PropTypes.object
// };


export default ColorForm;
