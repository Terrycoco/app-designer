//definitions of colors and sets to theme vars
var Color = require('color');

class Theme extends Color {
  constructor(basecolor) {
    super(basecolor);
    this.base = super.rgbString();
    this.tint = super.clone().mix(Color("white"), 0.5).rgbString();
    this.shade = super.clone().mix(Color("black"), 0.5).rgbString();
    this.tone = super.clone().mix(Color("gray"), 0.5).rgbString();
    this.baseText = Color(this.base).light() ? '#222222' : 'white';
    this.tintText = Color(this.tint).light() ? '#222222' : 'white';
    this.shadeText = Color(this.shade).light() ? '#222222' : 'white';
    this.toneText = Color(this.tone).light() ? '#222222' : 'white';
  }
}

export default Theme;
