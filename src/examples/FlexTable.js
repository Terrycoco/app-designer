import React, {Component} from 'react';


const styles = {
  container: {
    width: '100%'
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
          borderBottom: '1px solid grey'
        }
};

class FlexTable extends Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.getColKeys = this.getColKeys.bind(this);
  }
  componentWillMount() {
    this.colKeys = this.getColKeys();
  }
  getColKeys() {
    let firstrow = this.props.data[0];
    let colKeys = [];
    let dataArr = [];
    for (var key in firstrow) {
      colKeys.push(key);
    }
    return colKeys;
  }
  renderRows() {
    return this.props.data.map((row, rowidx) => {
      return (
        <tr key={rowidx} style={styles.tr}>
           {this.colKeys.map((key, colidx) => {
             return <td key={rowidx.toString() + colidx.toString()} style={styles.td}>{row[key]}</td>
           })}
        </tr>
      );
    })
  }

  render() {
    return (
      <div style={styles.container}>
        <table style={styles.table}>
            <thead style={styles.thead}>
               <tr style={styles.headerrow}>
               {this.props.colHeads.map((item) => {
                  return <th key={item} style={styles.th}>{item}</th>
               })}
                </tr>
            </thead>
                <tbody style={styles.tbody}>
                {this.renderRows()}
                </tbody>
              </table>
            </div>
    );
  }
}

export default FlexTable;


FlexTable.propTypes = {
  colHeads: React.PropTypes.array.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};
