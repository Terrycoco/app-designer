import { ADD_COLOR, REMOVE_COLOR, ALTER_COLOR } from 'actions/index';
import Color from 'utils/Color';

const INITIAL_STATE = {
  palette: []
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COLOR: {
      let newarr = state.palette.slice(0);
      const newclr = new Color('black');
      const newobj = {colorObj: newclr, hexInput: newclr.hex, colornameInput: newclr.colorname};
      newarr.push(newobj);
      return Object.assign({}, state, {palette: newarr});
    }
    case REMOVE_COLOR: {
      let newarr = state.palette.slice();
      newarr.splice(action.payload, 1);
      return Object.assign({}, state, {palette: newarr});
    }

    case ALTER_COLOR: {
      const idx = action.payload.idx;
      let newarr = state.palette.slice(0);
      let origclr = newarr[idx].colorObj;
      let newclr = origclr.setChannel(action.payload.channel, action.payload.newval);
      // console.log('newclr:', newclr);
      let newobj = {};
      //only change color if valid
      if (newclr.isValid) {
        newobj = {
          colorObj: newclr,
          hexInput: newclr.hex,
          colornameInput: newclr.colorname
        }
      } else {
        newobj = {
          colorObj: origclr,
          hexInput: (action.payload.channel === "hex") ? action.payload.newval : origclr.hex,
          colornameInput: (action.payload.channel === "colorname") ? action.payload.newval : ''
        }
      }

      newarr[idx] = newobj;
      return Object.assign({}, state, {palette: newarr});

    }
    default:
      return state;
  }
};
