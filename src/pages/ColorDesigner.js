import React, {Component} from 'react';
import ColorForm from 'components/ColorForm';
import {connect} from 'react-redux';
import {merge} from 'utils/shared';
import {addColor, alterColor, removeColor, selectColor, cloneColor, toggleLock } from 'actions/index';


const styles = {
  page: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'flex-start'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: 'black'
  },
  form: {
    flex: 1,
    maxWidth: '14em',
  }
};

class Designer extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClone = this.handleClone.bind(this);
    this.handleLock = this.handleLock.bind(this);
  }
  shouldComponentUpdate() {
    return true;
  }
  changeValue(idx, channel, value) {
    this.props.alterColor(idx, channel, value);
  }
  handleRemove(idx) {
    this.props.removeColor(idx);
  }
  handleSelect(idx) {
    this.props.selectColor(idx);
  }
  handleClone(idx) {
    this.props.cloneColor(idx);
  }
  handleLock(idx) {
    this.props.toggleLock(idx);
  }
  onAdd() {
    this.props.addColor();
  }
  renderPalette () {
    return this.props.palette.map((item, idx) => {
      const selectedStyle = {
        border: '2px solid',
        borderColor: (this.props.selected == idx) ? '#333333' : 'rgba(0,0,0,0.01)'
      };
      return (
          <li style={merge(styles.form, selectedStyle)} key={idx}>
            <ColorForm  key={idx}
                        isLocked={item.isLocked}
                        colorObj={item.colorObj}
                        hexInput={item.hexInput}
                        colornameInput={item.colornameInput}
                        idx={idx}
                        isSelected={(this.props.selected == idx)}
                        handleChange={this.changeValue}
                        handleRemove={this.handleRemove}
                        handleSelect={this.handleSelect}
                        handleClone={this.handleClone}
                        onLock={this.handleLock}
 />
          </li>
      );
    });
  }
  render() {
    return (
      <div style={styles.page}>
        <h3>Palette Designer</h3>
        <ul style={styles.formContainer}>
        {this.renderPalette()}
        </ul>
        <button onClick={this.onAdd}>Add Color</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('palette:', state.palette.palette, 'selected:', state.palette.selected);
  return {
    palette: state.palette.palette,
    selected: state.palette.selected
  };
}

export default connect(mapStateToProps, {addColor, alterColor, removeColor, selectColor, cloneColor, toggleLock})(Designer);
