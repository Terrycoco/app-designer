var colorString = require('color-string');
import { typeOf } from 'utils/shared';


class Color {
  constructor(args) {
    //check to see if this is a valid color
    let clr, a;
    if (typeOf(args) === 'string') {
      clr = colorString.get.rgb(args);
    } else if (typeOf(args) === 'array') {

      let str = colorString.to.rgb(args);
      clr = colorString.get.rgb(str);
    } else {
      a = arguments[3] || 1;
      let str = `rgba(${arguments[0]},${arguments[1]},${arguments[2]}, ${a})`;
      clr = colorString.get.rgb(str);
    }
    if (clr) {
      this.isValid = true;
      this.rgb = clr;
    } else {
      this.isValid = false;
      return;
    }

    a = this.rgb[3] || 1;
    if (this.rgb.length == 3) {
      this.rgb.push(a);
    }

    this.red = this.rgb[0];
    this.green = this.rgb[1];
    this.blue = this.rgb[2];
    this.alpha = a || 1;
    this.hex = colorString.to.hex(this.rgb);
    this.backgroundColor = 'white'; //default is white
    this.light = this.calcLight(this.red, this.green, this.blue);
    this.textColor = this.setTextColor();
    this.setChannel = this.setChannel.bind(this);
    this.colorname = colorString.to.keyword(this.rgb) || '';
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.clone = this.clone.bind(this);
 }


  calcLight(r,g,b) {
     let thislight = Math.round( ((r*299)+(g*587)+(b*114))/1000);
     return thislight;
  }

  setTextColor() {
    if (this.alpha >= 0.5) {
      return (this.light >= 128) ? 'black' : 'white';
    } else {
      let bg = new Color(this.backgroundColor);
      return (bg.light >= 128) ? 'black' : 'white';
    }
  }

  setBackgroundColor(backgroundColor) {
    return this.setChannel("backgroundColor", backgroundColor);
  }

  setChannel(channel, val) {
    let bg = this.backgroundColor;
    switch (channel) {
      case "light": {
        return this.changeLight(val, bg);
      }
      case "hex": {
        let newclr = new Color(val);
        newclr.backgroundColor = bg;
        newclr.textColor = this.setTextColor();
        return newclr;
      }
      case "colorname": {
        let newclr = new Color(val);
        newclr.backgroundColor = bg;
        newclr.textColor = this.setTextColor();
        return newclr;
      }
      case "backgroundColor": {
        let clr = new Color(val);
        let newclr = new Color([this.red, this.green, this.blue, this.alpha]);

        if (clr.isValid) {
            newclr.backgroundColor = val;
            newclr.textColor = this.setTextColor();
        } else {
          newclr.backgroundColor = bg;
          newclr.textColor = this.setTextColor();
        }

        return newclr;
      }

    default:

      this[channel] = val;
      let newclr = new Color([this.red, this.green, this.blue, this.alpha]);
      newclr.backgroundColor = bg;
      newclr.textColor = this.setTextColor();
      return newclr;
    }

  }
  changeLight(val, bg) {
    //increase or decrease vals by this amount
    let diff = val - this.light;
    let rgb = this.rgb;
    let newArr = rgb.map((item) => {
        item =  item + diff;
        if (item < 0) item = 0;
        if (item > 255) item = 255;
        return item;
    });
    let newclr =  new Color(newArr[0], newArr[1], newArr[2], this.alpha);
    newclr.backgroundColor = bg;
    newclr.textColor = this.setTextColor();
    return newclr;
  }

  clone() {
    return new Color(this.rgb);
  }
}

export default Color;
