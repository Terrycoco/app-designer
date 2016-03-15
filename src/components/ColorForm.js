import React, {Component} from 'react';
import Slider from 'components/Slider';
import Utils, { merge } from 'utils/shared';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width:'auto',
    wrap: 'nowrap',
    backgroundColor: 'white'
  },
  colorBlock:{
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
      backgroundColor: 'blue',
      justifyContent: 'flex-end'
    },
        X: {
          fontFamily: 'sans-serif',
          alignSelf: 'flex-end',
          fontSize: '.9em',
          fontWeight: 'bold',
          marginRight: '.5em'
        },
    inputBlock: {
      alignSelf: 'flex-end',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'stretch'

      },
            label: {
              fontSize: '.6em',
              marginRight: '.5em',
              marginLeft: '.5em'
            },
            input: {
              fontSize: '.7em',
              width: '98px',
              backgroundColor: 'white',
              color: 'black',
              textAlign: 'center'
          }
};

class ColorForm extends Component {
  constructor(props) {
    super(props);
    this.callChange = this.callChange.bind(this);
    this.selectField = this.selectField.bind(this);
    this.callRemove = this.callRemove.bind(this);
  }
  callChange(e) {
    let val = e.target.value;
    if (e.target.name === "hex") {
      Utils.debounce(this.props.onChange(this.props.idx, "hex", val), 1000);

    } else if (e.target.name === "colorname") {
      Utils.debounce(this.props.onChange(this.props.idx, "colorname", val), 1000);
    } else {
      this.props.onChange(this.props.idx, e.target.name, val);
    }

  }
  callRemove(e) {
    this.props.onRemove(this.props.idx);
  }
  selectField(e) {
    e.target.select();
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillReceiveProps(nextProps) {
  }
  render() {
    let colorstyle = {
      backgroundColor: `rgba(${this.props.colorObj.red}, ${this.props.colorObj.green}, ${this.props.colorObj.blue}, ${this.props.colorObj.alpha})`,
      color: this.props.colorObj.textColor
    }
    return (

      <div style={styles.container}>
        <div style={merge(styles.colorBlock, colorstyle)}>
              <div style={styles.swatchMenu}>
                  <span idx={this.props.idx} style={merge(styles.X, {color: colorstyle.color})} onClick={this.callRemove} >x</span>
              </div>
              <div style={styles.inputBlock} >
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
                </div>
          </div>
        <div>
           <Slider name="red" key={this.props.idx+'r'} idx={this.props.idx} min="0" max="255" step="1" value={this.props.colorObj.red} onChange={this.props.onChange} colorObj={this.props.colorObj}/>
           <Slider name="green" key={this.props.idx+'g'} idx={this.props.idx} min="0" max="255" step="1" value={this.props.colorObj.green} onChange={this.props.onChange} colorObj={this.props.colorObj}/>
           <Slider name="blue" key={this.props.idx+'b'} idx={this.props.idx} min="0" max="255" step="1" value={this.props.colorObj.blue} onChange={this.props.onChange} colorObj={this.props.colorObj}/>
           <Slider name="light" key={this.props.idx+'l'} idx={this.props.idx} min="0" max="255" step="1" value={this.props.colorObj.light} onChange={this.props.onChange} colorObj={this.props.colorObj}/>
          <Slider name="alpha" key={this.props.idx+'a'} idx={this.props.idx} min=".001" max="1" step=".001" value={this.props.colorObj.alpha} onChange={this.props.onChange} colorObj={this.props.colorObj}/>
        </div>

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