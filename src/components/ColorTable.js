import React, {Component} from 'react';
import {connect} from 'react-redux';
import colors from 'styles/colors';
import {merge} from 'utils/shared';
import {Table} from 'reactable';
import {applyStyle, linkColor, clearLinks} from 'actions/index';

const styles = {
  container: {
    width: '100%',
    fontSize: '.8em'
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottom:'1px solid grey',
    borderRight: '1px solid grey'
  },
    thead: {
        color: 'white',
        borderTop: '1px solid grey',
        borderBottom: '1px solid grey',
        borderRight: '1px solid grey',
    },
      headerrow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch',
        flexWrap: 'nowrap'
      },
        th: {
          flex: '1',
        },
        spacer: {
          flex: '0 0 17px',
          background: 'grey',
          alignSelf: 'flex-end'
        },
    tbody: {
      display: 'block',
      overflowY: 'scroll'
    },
      tr: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch'
      },

        td: {
          flex: '1',
          paddingLeft: '2px',
          paddingRight: '2px',
          borderLeft: '1px solid grey',
          borderBottom: '1px solid grey',
          textAlign: 'center'
        },
        col1: {
          textAlign: 'left'
        },
};


class TableRow extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.findColor = this.findColor.bind(this);
  }

  onClick(e) {
    const linkIdx = this.props.linkIdx;
    const attr = e.target.attributes.name.value;
    this.props.callLink(linkIdx, attr);
  }
  findColor(id) {
    if (id == 'trans') {
      return 'transparent';
    }
    let clr = this.props.palette.find(x => x.id === id);
    if (clr) {
      return clr.colorObj.rgbaStr;
    }
  }
  render() {
    let el = this.props.el;
    let name = el.element;
    let bg =  (typeof(el.bg) !== 'undefined') ? this.findColor(el.bg) : 'transparent';
    let fg =  (typeof(el.fg) !== 'undefined') ? this.findColor(el.fg): 'transparent';
    let bd =  (typeof(el.bd) !== 'undefined') ? this.findColor(el.bd) : 'transparent';

    return(
      <tr key={name} style={styles.tr}>
        <td style={merge(styles.td, styles.col1)}>{name}</td>
        <td name="bg" style={merge(styles.td,  {backgroundColor: bg})}
            onClick={this.onClick}>
            {(bg == 'transparent') ? 'transp' : ''}
            </td>
        <td name="fg" style={merge(styles.td, {backgroundColor: fg})} onClick={this.onClick}> </td>
        <td name="bd" style={merge(styles.td, {backgroundColor: bd})} onClick={this.onClick}> </td>
      </tr>
    );
  }
}

class ColorTable extends Component {
  constructor(props) {
    super(props);
    this.callLink = this.callLink.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.clearLinks = this.clearLinks.bind(this);
  }
  callLink(linkIdx, attr) {
    this.props.linkColor(linkIdx, attr, this.props.selectedColorObj)
  }
  clearLinks() {
    this.props.clearLinks();
  }
  renderRow() {
      return this.props.links.map((link, idx) => {
       return <TableRow key={idx} palette={this.props.palette} linkIdx={idx} el={link} callLink={this.callLink}/>
     });
  }
  render() {
    return (
      <div style={merge(styles.container, this.props.styles )}>
        <h3>Element Links</h3>
          <table style={styles.table} >
          <thead style={styles.thead}>
            <tr style={styles.headerrow}>
              <th style={styles.th}>Element</th>
              <th style={styles.th}>Back</th>
              <th style={styles.th}>Text</th>
              <th style={styles.th}>Border</th>
              <th style={styles.spacer}></th>
            </tr>
            </thead>
            <tbody style={merge(styles.tbody, {height: this.props.bodyHeight})}>
            {this.renderRow()}
           </tbody>
          </table>
          <button onClick={this.clearLinks} >Clear</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('currentlinkstate:', state.palette.links);
  return {
    selected: state.palette.selected || 0,
    selectedId: state.palette.selectedId || '',
    links: state.palette.links,
    palette: state.palette.palette
  };
}


export default connect(mapStateToProps, { applyStyle, linkColor, clearLinks })(ColorTable);
