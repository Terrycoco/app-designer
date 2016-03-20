import React, {Component} from 'react';
import ColorForm from 'components/ColorForm';
import {connect} from 'react-redux';
import {merge} from 'utils/shared';
import {addColor, alterColor, removeColor, selectColor, cloneColor, toggleLock } from 'actions/index';
import ColorTable from 'components/ColorTable';
import Mock from 'components/Mock';
import Scroll from 'examples/Scroll';

const styles = {
page: {
  minHeight: '100%',
  flex: '1 1 auto',
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap'
},
  upperFrame: {
    flex: '0 0 50%',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%'

  },
      form: {
        width: '14em'
      },
  lowerFrame: {
    flex: '1',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '1em',
    flexWrap: 'wrap',

  },
     table: {
      flex: '0 1 50%',
      alignSelf: 'flex-start',
      maxWidth: '15em',
      margin: '1em'
     },
    mock: {
      maxHeight: '95%',
      margin: '1em',
      flex: '1',
      maxWidth: '35em'
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
  handleSelect(idx, selectedId) {
    this.props.selectColor(idx, selectedId);
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
      return (
          <li style={styles.form} key={idx}>
            <ColorForm  key={item.id}
                        unique={item.id}
                        isLocked={item.isLocked}
                        colorObj={item.colorObj}
                        textColor={item.colorObj.textcolor}
                        hexInput={item.hexInput}
                        colornameInput={item.colornameInput}
                        idx={idx}
                        isSelected={(this.props.selected == idx)}
                        handleChange={this.changeValue}
                        handleRemove={this.handleRemove}
                        handleSelect={this.handleSelect}
                        handleClone={this.handleClone}
                        onLock={this.handleLock} />
          </li>
      );
    });
  }
  render() {
    return (
      <div style={merge(styles.page)}>
        <header>
          <h3>Palette Designer</h3>
          <nav>
            <button onClick={this.onAdd}>Add Color</button>
           </nav>
        </header>
        <ul style={styles.upperFrame}>
            {this.renderPalette()}
        </ul>

        <div style={styles.lowerFrame}>
          <ColorTable styles={styles.table} bodyHeight="400px"/>
          <Mock styles={styles.mock} />
        </div>



      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('palette:', state.palette.palette, '\n',
              'selected:', state.palette.selected,'\n',
               'selectedID:', state.palette.selectedId), '\n',
               'links:', state.palette.links
  return {
    palette: state.palette.palette,
    selected: state.palette.selected,
    selectedId: state.palette.selectedId,
    links: state.palette.links
  };
}
          // <Mock position={styles.mock} />
export default connect(mapStateToProps, {addColor, alterColor, removeColor, selectColor, cloneColor, toggleLock})(Designer);
