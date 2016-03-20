import React, {Component} from 'react';

const styles = {
  container: {
    display: 'block',
    height: '285px',
    overflow:'hidden',
    width: '756px',
    border: '1px solid #963',
    padding: '0',
    font: 'normal normal 12px Verdana, Geneva, Arial, Helvetica, sans-serif'
  },
  table: {
    width: '756px',
    border: '0',
    cellpadding: '0',
    cellspacing: '0',
    borderCollapse: 'separate',
    borderColor: 'grey',
    width: '100%'
  },
  thead: {
    display: 'table-header-group',
    verticalAlign: 'middle',
    borderColor: 'inherit'
  },
  headerrow: {
    display: 'block',
    verticalAlign: 'inherit',
    borderColor: 'inherit'
  },
  th: {
    display: 'table-cell',
    verticalAlign: 'inherit',
    width: '200px',
    background: '#C96',
    borderLeft: '1px solid #EB8',
    borderRight: '1px solid #B74',
    borderTop: '1px solid #EB8',
    fontWeight: 'normal',
    padding: '4px 3px',
    textAlign: 'left'
  },

  tbody: {
    display: 'block',
    height: '262px',
    overflow: 'auto',
    width: '100%',
    verticalAlign: 'middle',
    borderColor: 'inherit'
  },
  tr: {
    display: 'table-row',
    verticalAlign: 'inherit',
    borderColor: 'inherit',
    position: 'relative'
  },
  td: {
    display: 'table-cell',
    verticalAlign: 'inherit',
    background: '#fff',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: '1px solid #ccc',
    borderTop: '1px solid #ddd',
    padding: '2px 3px 3px 4px',
    width: '30%'
  }

}

class Scroll extends Component {
  render() {
    return (
      <div style={styles.container}>
        <table style={styles.table}>
            <thead style={styles.thead}>
               <tr style={styles.headerrow}>
                  <th style={styles.th}>Left</th>
                  <th style={styles.th}>Center</th>
                  <th style={styles.th}>Right Column</th>
                </tr>
            </thead>
            <tbody style={styles.tbody}>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>
                <tr style={styles.tr}>
                  <td style={styles.td}>1</td>
                  <td style={styles.td}>2</td>
                  <td style={styles.td}>3</td>
                </tr>


                </tbody>
              </table>
            </div>
        );
      }
}


export default Scroll;
