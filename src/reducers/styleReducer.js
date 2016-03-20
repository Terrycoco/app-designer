import {APPLY_STYLE } from 'actions/index';

const INITIAL_STATE =  {
  body: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'mediumgrey',
    fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif"
  },
  header: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'mediumgrey'
  }
};


export default ( state = INITIAL_STATE, action) => {
  switch( action.type) {
    case APPLY_STYLE: {
      let newstate = Object.assign({}, state);
      //add if not there
      if (typeof(newstate[action.payload.el]) == 'undefined') {
        newstate[action.payload.el] = {};
      }
      newstate[action.payload.el][action.payload.attr] = action.payload.val;
      console.log(newstate);
      return newstate;
    }
    default:
      return state;
  }
};
