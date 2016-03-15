 // import colors, {palette} from 'styles/colors';
var Color = require('color');

const base = Color('#2ABB9B');
let text = "#000000";
if (base.light()) {
  text = "#111111";
}
let startGrad = base.clone().whiten(1);
let endGrad = base.clone().blacken(.3);
console.log(startGrad.rgbString(), endGrad.rgbString());


const hoverBase = base.clone().darken(.3);
let hoverText = "#000000";
if (hoverBase.light()) {
  hoverText = "#111111";
}
let hoverStartGrad = hoverBase.clone().whiten(.3);
let hoverEndGrad = hoverBase.clone().darken(.3);

const colors = {
  bg: base.rgbString(),
  text: text,
  border: '#5d7fbc',
  startGrad: startGrad.rgbString(),
  endGrad: endGrad.rgbString(),

  hoverBorder: '#7d99ca',
  hoverBase: hoverBase.rgbString(),
  hoverText: hoverText,
  hoverStartGrad: hoverStartGrad.rgbString(),
  hoverEndGrad: hoverEndGrad.rgbString(),
};

const styles = {
  container: {
    border:'1px solid ' + colors.border,
    // Webkitborderradius: 3,
    // moz-border-radius: 3px;
    borderRadius: 3,
    fontSize: '.7em',
    fontFamily: 'arial, helvetica, sans-serif',
    fontWeight: 'bold',
    padding: '.8em',
    textDecoration: 'none',
    display: 'inline-block',
    textShadow: '-1px -1px 0 rgba(0,0,0,0.3)', //shadow above
    // textShadow: '1px 1px 0px #283744', //shadow below
    color: colors.text,
    backgroundColor: colors.bg,
    backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(${colors.startGrad}), to(${colors.endGrad}))',
    backgroundImage: '-webkit-linear-gradient(top, ${colors.startGrad}, ${colors.endGrad})',
    backgroundImage: '-moz-linear-gradient(top, ${colors.startGrad},  ${colors.endGrad})',
    backgroundImage: '-ms-linear-gradient(top, ${colors.startGrad},  ${colors.endGrad})',
    backgroundImage: '-o-linear-gradient(top, ${colors.startGrad},  ${colors.endGrad})',
    backgroundImage: 'linear-gradient(to bottom, ${colors.startGrad},  ${colors.endGrad})',
    filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=${colors.startGrad}, endColorstr= ${colors.endGrad})'
 },

  hover: {
   border: '1px solid ' + colors.hoverBorder,
   color: colors.hoverText,
   backgroundColor: colors.hoverBase,
   backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(${colors.hoverStartGrad}), to(${colors.hoverEndGrad}))',
   backgroundImage: '-webkit-linear-gradient(top, ${colors.hoverStartGrad}, ${colors.hoverEndGrad})',
   backgroundImage: '-moz-linear-gradient(top, ${colors.hoverStartGrad},  ${colors.hoverEndGrad})',
   backgroundImage: '-ms-linear-gradient(top, ${colors.hoverStartGrad},  ${colors.hoverEndGrad})',
   backgroundImage: '-o-linear-gradient(top, ${colors.hoverStartGrad},  ${colors.hoverEndGrad})',
   backgroundImage: 'linear-gradient(to bottom, ${colors.hoverStartGrad},  ${colors.hoverEndGrad})',
   filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=${colors.hoverStartGrad}, endColorstr= ${colors.hoverEndGrad})'
  }

};

export default styles;
