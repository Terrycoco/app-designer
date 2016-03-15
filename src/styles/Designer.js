import React, { Component } from 'react';
import Theme from 'styles/theme';
import ColorItem from 'components/ColorItem';
const basecolor = new Theme('#E6DCC8')
const accent = new Theme('#FFCC3B');

const theme =  {
  base: basecolor.base,
  baseText: basecolor.baseText,
  tint: basecolor.tint,
  tintText: basecolor.tintText,
  tone: basecolor.tone,
  toneText: basecolor.toneText,
  shade: basecolor.shade,
  shadeText: basecolor.shadeText
};

const styles = {
  container: {
    fontFamily: "'PT Sans', Verdana, arial, sans-serif",
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    height: '500px',
    padding: '1em'
  },
  base: {
    flex: 1,
    background: theme.base,
    color: theme.baseText,
  },
  tint: {
    flex: 1,
    background: theme.tint,
    color: theme.tintText
  },
  shade: {
    flex: 1,
    background: theme.shade,
    color: theme.shadeText
  },
  tone: {
    flex: 1,
    background: theme.tone,
    color: theme.toneText
  }
};

console.log(styles);

class Designer extends Component {

  render() {

    return (
   <div>
   Color Designer

       <div style={styles.container}>
        <div key="1" style={styles.base}>BASE<br/> {theme.base}</div>
        <div key="2" style={styles.tint}>TINT<br/>  {theme.tint}</div>
        <div key="4" style={styles.shade}>SHADE<br/>  {theme.shade}</div>
        <div key="3" style={styles.tone}>TONE<br/>  {theme.tone}</div>
      </div>
      </div>
    );
  }
}

export default Designer;
//
//
//   <div key="3" style={{background: styles.tone}}>TONE {styles.tone}</div>
//     <div key="4" style={{background: styles.shade}}>SHADE {styles.shade}</div>
