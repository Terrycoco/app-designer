import reducer from 'reducers/colorReducer';
import { ADD_COLOR, ALTER_COLOR } from 'actions/index';
import Color from 'utils/Color';

const colorObj = new Color();
const colorstate = {
  palette: [
    colorObj
  ]
};

describe('color reducer', () => {
//   it('should return initial state', () => {
//     expect(reducer(undefined, {})).to.eql({palette: []});
//   });

  // it('should add a color', () => {
  //   expect(reducer(colorstate, {type: ADD_COLOR } )).to.eql(
  //     { palette: [
  //        colorObj, colorObj
  //     ]}
  //   );
  // });

  // it('should alter the white channel', () => {
  //   expect(reducer(colorObj, {type: ALTER_COLOR, payload:{idx: 0, channel: 'red', newval: 255}})).to.eql(
  //     { palette: [
  //       { alpha: 0,
  //         blue: 0,
  //         green: 0,
  //         hex: "#FF0000",
  //         red: 255,
  //         textColor: "black",
  //         white: 0,
  //         setChannel: [Function] }
  //       ]}
  //   );
  // });
});
