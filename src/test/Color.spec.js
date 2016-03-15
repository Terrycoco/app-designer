import Color from 'utils/Color';
import {typeOf} from 'utils/shared';

describe('color object', () => {
  // it('returns a color object from rgb vals', () => {
  //   let clr = new Color(255, 255, 255);
  //   let rgb =  clr.rgb;
  //   expect(clr instanceof Color).to.equal(true);
  // });
  // it('returns a color object from rgb array', () => {
  //   let clr = new Color([255, 255, 255]);
  //   let rgb =  clr.rgb;
  //   expect(rgb).to.eql([255, 255, 255,1]);
  // });
  it('returns the light value', () => {
    let clr = new Color(255, 255, 255, .40);
    clr.setBackgroundColor('black');
    let light =  clr.light;
    console.log('textcolor is:', clr.textColor);
  });
  // it('returns textcolor', () => {
  //   let clr = new Color(255,255,255);
  //   console.log(clr.light);
  //   let t = clr.textColor();
  //   expect(t).to.equal('black');
  // });
  // it('returns textcolor when alpha and backcolor', () => {
  //   let clr = new Color(0,0,0,.25);
  //   let t = clr.textColor('white');
  //   expect(t).to.equal('black');
  // });
  // it('accepts a color name', () => {
  //   let clr = new Color('yellow');
  //   expect(clr.rgb).to.eql([255,255,0,1]);
  // });
  // it('returns a color name', () => {
  //   let clr = new Color(255,255,255);
  //   expect(clr.colorname).to.equal('white');
  // });
  // it('accepts a hex code', ()=> {
  //   let clr = new Color("#ffffff");
  //   expect(clr.hex).to.equal('#FFFFFF');
  // });
  // it('accepts a mixed case code', () => {
  //   let clr = new Color("#feFE00");
  //   expect(clr.hex).to.equal("#FEFE00");
  // });
  //
  // it('sets channel and returns new color object',() => {
  //   let clr = new Color(0,0,0);
  //   let newClr = clr.setChannel("red", 255);
  //   expect (newClr.hex).to.equal("#FF0000");
  // });
  // it('sets the light channel and returns new object',() => {
  //   let clr = new Color(255,255,255);
  //   let newClr = clr.setChannel("light", 0);
  //   expect (newClr.hex).to.equal("#000000");
  // });
  // it('sets the hex channel and returns new object',() => {
  //   let clr = new Color(255,255,255);
  //   let newClr = clr.setChannel("hex", "#999999");
  //   expect (newClr.hex).to.equal("#999999");
  // });
  // it('sets the name channel and returns new object',() => {
  //   let clr = new Color(255,255,255);
  //   let newClr = clr.setChannel("colorname", "cyan");
  //   expect(newClr.colorname).to.equal('cyan');
  // });
  // it('updates color name on setting of channel', () => {
  //   let clr = new Color(127, 255, 0);
  //   let newClr = clr.setChannel("blue", 212);
  //    expect(newClr.blue).to.equal(212);
  // });
  // it('returns empty object and   if string is invalid', () => {
  //      let clr = new Color('notacolor');
  //      expect(clr.isValid).to.equal(false);
  // });
  // it('returns error if args are invalid', () => {
  //     let clr = new Color(255, 134345);
  //     expect(clr.isValid).to.equal(false);
  // });
  // it('returns alpha channel', () => {
  //   let clr =new Color(255, 255, 255, 0.5);
  //   expect(clr.alpha).to.equal(0.5);
  // });
  // it('updates the alpha chennel', () => {
  //   let clr = new Color(255, 255, 255, .5);
  //   let newclr = clr.setChannel("alpha", .25);
  //   expect(newclr.alpha).to.equal(.25);
  // });

});
