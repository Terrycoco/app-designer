import React, {Component} from 'react';
import ColorForm from 'components/ColorForm';
import {connect} from 'react-redux';
import {addColor, alterColor, removeColor} from 'actions/index';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    border: 'thin solid red',
    marginLeft: '1em',
    marginRight: '1em'
  },
  form: {
    flex: '0 1 auto'
  }
};

class Designer extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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
  onAdd() {
    this.props.addColor();
  }
  renderPalette () {
    return this.props.palette.map((item, idx) => {
      return (
          <li style={styles.form} key={idx}>
            <ColorForm  key={idx}
                        colorObj={item.colorObj}
                        hexInput={item.hexInput}
                        colornameInput={item.colornameInput}
                        idx={idx}
                        onChange={this.changeValue}
                        onRemove={this.handleRemove} />
          </li>
      );
    });
  }
  render() {
    return (
      <div style={styles.container}>
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
  console.log('palette:', state.palette.palette);
  return {
    palette: state.palette.palette
  };
}

export default connect(mapStateToProps, {addColor, alterColor, removeColor})(Designer);
