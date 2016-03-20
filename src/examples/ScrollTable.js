import React, {Component} from 'react';

const styles = {
  container {
    width: '400px',
    overflowX: 'auto'
  },
  table {
    overflowY: 'scroll'
  },
  tbody {
    overflowX: 'scroll',
    display: 'block',
    height: '200px'
  },
  thead {
    display: 'block'
  }
};


class ScrollTable extends Component {
  render() {
    return (
      <div style={styles.container}>
          <table style={styles.table}>
              <thead style={styles.thead}>
                <th>foo</th><th>foo</th><th>foo</th><th>foo</th>
              </thead>
              <tbody styles={tbody}>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
                <tr><td>foo</td><td>foo</td><td>foo</td><td>foo</td></tr>
              </tbody>
          </table>
      </div>
    );
  }
}


export default ScrollTable;
