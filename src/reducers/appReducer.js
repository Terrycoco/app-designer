import { SET_WINDOW_SIZE, TOGGLE_BORDERS } from 'actions/index';

const INITIAL_STATE = {
  windowSize: null,
  borders: 'none'
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WINDOW_SIZE: {
      return Object.assign({}, state, { windowSize: action.payload });
    }
    case TOGGLE_BORDERS: {
      return Object.assign({}, state, { borders: action.payload });
    }
    default:
      return state;
  }
};
