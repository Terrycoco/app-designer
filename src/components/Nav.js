import React, { Component } from 'react';
import {Link} from 'react-router';

let full = {
  nav: {
    height: '40px',
    width: '100%',
    background: '#455868',
    fontSize: '1em',
    fontFamily: "'PT Sans', Arial, sans-serif",
    fontWeight: 'bold',
    borderBottom: '2px solid #283744'
  },
  ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0',
    height: '40px',
    flexWrap: 'wrap'
  },
  li: {
    display: 'inline-block',
    textAlign: 'center',
    border: '1px solid #777',
    flex: '1'
  },
  link: {
    fontSize: '.8em',
    color:'white',
    textDecoration: 'none',
    textShadow: '1px 1px 0px #283744',
    textAlign: 'center'
  },
  pull: {
    display: 'none'
  }
};
let small = {
  nav: {
    width: '100%',
    height: 'auto',
    fontSize: '1em',
    fontFamily: "'PT Sans', Arial, sans-serif",
    fontWeight: 'bold',
    borderBottom: '2px solid #283744',
    zIndex: '10'
  },
  ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    padding: '0',
    flexWrap: 'wrap',
    background: '#455868'
  },
  li: {
    display: 'block',
    flex: '0 0 50%',
    border: '1px solid #777',
    textAlign: 'center'
  },
  link: {
    fontSize: '.9em',
    flex: '0 0 50%',
    color:'white',
    textDecoration: 'none',
    textShadow: '1px 1px 0px #283744',
    textAlign: 'center',
    paddingLeft: '.8em',
    lineHeight: '4em'
  },
  pull: {
    display: 'none'
  }
};

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let styles = full;
    if (this.props.winSize == 1) {
      styles = small;
    }
    return (
      <nav style={styles.nav} className={this.props.className} >
          <ul style={styles.ul}>
              <li style={styles.li}><Link style={styles.link} to="#">Home</Link></li>
              <li style={styles.li}><Link style={styles.link} to="#">How-to</Link></li>
              <li style={styles.li}><Link style={styles.link} to="#">Icons</Link></li>
              <li style={styles.li}><Link style={styles.link} to="#">Design</Link></li>
              <li style={styles.li}><Link style={styles.link} to="#">Web 2.0</Link></li>
              <li style={styles.li}><Link style={styles.link} to="#">Tools</Link></li>
          </ul>

      </nav>
    );
  }
}

export default Nav;
