import Color from 'lib/Color';
import shortid from 'shortid';
import {  ADD_COLOR,
          REMOVE_COLOR,
          ALTER_COLOR,
          SELECT_COLOR,
          CLONE_COLOR,
          TOGGLE_LOCK,
          LINK_COLOR,
          CLEAR_LINKS
        } from 'actions/index';


const INITIAL_STATE = {
  palette: [],
  selected: null,
  selectedId: '',
  links: [
    { "element": "body", bg:"", fg:"", bd:""},
    { "element": "header", bg:"", fg:"", bd:""},
    { "element": "footer", bg:"", fg:"", bd:""},
    { "element": "section", bg:"", fg:"", bd:""},
    { "element": "aside", bg:"", fg:"", bd:""},
    { "element": "p", bg:"trans", fg:"", bd:""},
    { "element": "h1", bg:"trans", fg:"", bd:""},
    { "element": "h2", bg:"trans", fg:"", bd:""},
    { "element": "h3", bg:"trans", fg:"", bd:""},
    { "element": "h4", bg:"trans", fg:"", bd:""},
    { "element": "h5", bg:"trans", fg:"", bd:""},
    { "element": "h6", bg:"trans", fg:"", bd:""},
    { "element": "a", bg:"trans", fg:"", bd:""},
    { "element": "table", bg:"", fg:"", bd:""},
    { "element": "tr", bg:"", fg:"", bd:""},
    { "element": "th", bg:"", fg:"", bd:""},
    { "element": "td", bg:"", fg:"", bd:""},
    { "element": "button", bg:"", fg:"", bd:""},
    { "element": "nav", bg:"", fg:"", bd:""}
  ]
};

export default (state=INITIAL_STATE, action) => {
  console.log('got to reducer action is:', action);
  switch (action.type) {
    case ADD_COLOR: {
      let newarr = state.palette.slice(0);
      const newclr = new Color('black');
      const newobj = {id: shortid.generate(), colorObj: newclr, hexInput: newclr.hex, colornameInput: newclr.colorname, isLocked: false};
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

      //if locked just change name
      if (action.payload.channel == "colorname" && newarr[idx].isLocked) {
        newarr[idx].colornameInput = action.payload.newval;
        return Object.assign({}, state, {palette: newarr});
      }

      let origclr = newarr[idx].colorObj;
      let origid = newarr[idx].id;

      let newclr = origclr.setChannel(action.payload.channel, action.payload.newval);
      // console.log('newclr:', newclr);
      let newobj = {};
      //only change color if valid
      if (newclr.isValid) {
        newobj = {
          colorObj: newclr,
          hexInput: newclr.hex,
          colornameInput: newclr.colorname,
          isLocked: false,
          id: origid
        }
      } else {
        newobj = {
          colorObj: origclr,
          hexInput: (action.payload.channel === "hex") ? action.payload.newval : origclr.hex,
          colornameInput: (action.payload.channel === "colorname") ? action.payload.newval : newarr[idx].colornameInput,
          isLocked: false,
          id: origid
        }
      }

      newarr[idx] = newobj;
      return Object.assign({}, state, {palette: newarr});

    }
    case SELECT_COLOR: {
      let newarr = state.palette.slice(0);
      let obj = newarr[action.payload.idx];
      let selectedId = action.payload.selectedId;
      return Object.assign({}, state, {selected: action.payload.idx, selectedId: selectedId}, {palette: newarr});
    }

    case CLONE_COLOR: {
      const idx = action.payload;
      let newarr = state.palette.slice(0);
      let origclr = newarr[idx].colorObj;
      let newclr = origclr.clone();
      const newobj = {id: shortid.generate(), colorObj: newclr, hexInput: newclr.hex, colornameInput: newclr.colorname, isLocked: false, isSelected: false};
      newarr.push(newobj);
      return Object.assign({}, state, {palette: newarr});
    }

    case TOGGLE_LOCK: {
      const idx = action.payload;
      let newarr = state.palette.slice(0);
      newarr[idx].isLocked = !newarr[idx].isLocked;
      return Object.assign({}, state, {palette: newarr});
    }

    case LINK_COLOR: {
      //payload: linkIdx, attr
      //copy links array
      let newlinkarr = state.links.slice(0);
      //find this element within links
      let el = newlinkarr[action.payload.linkIdx];
      //fetch currently selected id
      let selectedId = state.selectedId;
      //store the unique id in the link
      el[action.payload.attr] = selectedId;
      return Object.assign({}, state, {links: newlinkarr});
    }

    case CLEAR_LINKS: {

      let newlinkarr = INITIAL_STATE.links.slice(0);
      console.log('newlinkarr', newlinkarr);
      return Object.assign({}, state, {links: newlinkarr});
    }

    default:
      return state;
  }
};
