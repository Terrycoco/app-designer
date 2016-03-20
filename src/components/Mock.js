import React, {Component} from 'react';
import { connect } from 'react-redux';
import {merge} from 'utils/shared';

const styles = {
  container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      border: '1px solid',
      fontSize: '.7em',
      justifyContent: 'stretch'
  },
          header: {
              height: '10%',
              alignSelf: 'flex-end',
              border: '1px solid',
              width: '100%',
              padding: '2px'
          },
          main: {
            display: 'flex',
            flexDirection: 'row',
            flex: '1',
            border: '1px solid',
            padding: '2px'
          },
          aside: {
            display: 'block',
            flex: '1',
            border: '1px solid',
            padding: '2px',
            margin: '2px'
          },
          section: {
            flex: '3',
            border: '1px solid',
            padding: '2px',
            margin: '2px',
            display: 'block',
            height: '500px',
            overflowY: 'scroll'
          },
          footer: {
            height: '9%',
            border: '1px solid',
            padding: '2px'
          }
}




class Mock extends Component {
  constructor(props) {
    super(props);
    this.fetchLinkedStyles = this.fetchLinkedStyles.bind(this);
  }

  fetchLinkedStyles(element) {
    let link = this.props.links.find(x => x.element === element);
    if (link) {
      let bg = this.props.palette.find(x => x.id === link.bg);
      let bgclr = bg ? bg.colorObj.rgbaStr : undefined;
      let fg = this.props.palette.find(x => x.id === link.fg);
      let fgclr = fg ? fg.colorObj.rgbaStr : undefined;
      let bd = this.props.palette.find(x => x.id === link.bd);
      let bdclr = bd ? bd.colorObj.rgbaStr : undefined;
       return {background: bgclr,
              color: fgclr,
              borderColor: bdclr};
    }
  }
  render() {
    let bodystyle = this.fetchLinkedStyles("body");
    let headerstyle = this.fetchLinkedStyles("header");
    let footerstyle = this.fetchLinkedStyles("footer");
    let asidestyle = this.fetchLinkedStyles("aside");
    let sectionstyle = this.fetchLinkedStyles("section");
    let h1 = this.fetchLinkedStyles("h1");
    let h2 = this.fetchLinkedStyles("h2");
    let h3 = this.fetchLinkedStyles("h3");
    let h4 = this.fetchLinkedStyles("h4");
    let p = this.fetchLinkedStyles("p");
    return (
      <div name="body" style={merge(this.props.styles, styles.container, bodystyle )}>
        <header style={merge(styles.header,headerstyle)}>
          <h1 style={h1}>How to Use Palette Designer</h1></header>
        <div style={styles.main}>
            <aside style={merge(styles.aside,asidestyle)}>
                <a href="#create">Creating A Palette</a><br/>
                <ul>
                  <li><a href="#add">Add a color</a></li>
                  <li><a href="#enter">Enter a color</a></li>
                  <li><a href="#edit">Edit a color</a></li>
                  <li><a href="#lock">Lock a color</a></li>
                  <li><a href="#clone">Copy a color</a></li>
                  <li><a href="#delete">Delete a color</a></li>
               </ul>
               <a href="#linking">Linking A Palette</a><br/>
                <ul>
                  <li><a href="#link">Link a color</a></li>
                </ul>
               <a href="#create">Saving A Palette</a><br/>
               <a href="#create">Creating A CSS File</a><br/>

            </aside>
            <section style={merge(styles.section,sectionstyle)}>
              <h2 id="create" style={h2}>Creating a Palette</h2>
               <h3 id="add" style={h3}>To add a new color:</h3>
               <p style={p}>Click <strong>Add Color</strong> button.  A new color swatch will open to black.
              </p>
              <h3 id="enter" style={h3}>To enter a color:</h3>
              <p style={p}>
                You can enter any valid hex code, starting with '#', in the <strong>hex input box</strong>. Alternatively, you can enter the common web name of the color.  For example, 'white','cyan', 'ivory'.   If it is valid, the color will pop in with all of its values.
              </p>
              <h3 id="edit" style={h3}>To edit a color:</h3>
              <p style={p}>
               Move the <strong>red, green and blue sliders</strong> on the swatch controls to increase/decrease the amount of colored light of that channel.  Moving the <strong>light slider</strong> moves all three color channels (pure light) at the same time.  The <strong>alpha slider</strong> alters the opacity of the color, letting whatever background color that it sits on show through.</p>
               <p style={p}>Alternatively, you can enter each channel's absolute value in the <strong>value box</strong> on the right. The absolute values range from 0 to 255 for the red, green, blue, and light channels, and .001 to 1 for the alpha channel.</p>


              <h3 id="lock" style={h3}>To lock/unlock a color:</h3>
              <p style={p}>
               The <strong>lock toggle</strong> in the upper left of the swatch unlocks/locks a color.  Once you are happy with a color, lock it by clicking it closed.
              </p>
              <h3 id="clone" style={h3}>To copy a color:</h3>
              <p style={p}>
               To make variations on a color, copy it by selecting the <strong>right arrow icon</strong> on the color you wish to copy.  A new swatch will be added with the values of that color, which you can then alter.
              </p>
              <h3 id="delete" style={h3}>To delete a color:</h3>
              <p style={p}>
               Click on the <strong>x icon</strong> on the upper right of the swatch.
              </p>

              <h2 id="linking">Linking A Palette</h2>
              <p style={p}>
              Using the <strong>Element Links</strong> table, experiment with your new palette.  Here's where you set the defaults of all the element tags in your HTML.  This page mock has all the HTML elements to immediately preview what a color will look like on the screen.  Once linked, any changes to that color swatch will immediately be reflected on the mock page.
              </p>
              <h3 id="link" style={h3}>To link a color:</h3>
              <p style={p}>
              Select any color swatch in your palette to make it the <strong>currently selected color</strong>.  Then, click on the <strong>Back</strong>, <strong>text</strong>, or <strong>border</strong> cell in the desired element to set that element's default.  Preview it on the mock page.
              </p>
            </section>

        </div>
        <footer style={merge(styles.footer,footerstyle)}>Footer</footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    palette: state.palette.palette,
    links: state.palette.links
  };
}

export default connect(mapStateToProps)(Mock);
