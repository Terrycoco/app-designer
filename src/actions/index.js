export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';
export function setWindowSize(width) {
  let size = null;
  if (width < 500) {
    size = 1;
  } else if (width < 900) {
    size = 2;
  } else if (width < 1025) {
    size = 3;
  } else {
    size = 4;
  }
  return {
    type: SET_WINDOW_SIZE,
    payload: size
  };
}

export const TOGGLE_BORDERS = 'TOGGLE_BORDERS';
export function toggleBorders(show) {
  let bord = 'none';
  if (show) {bord = '1px solid red'};
  console.log(bord);
  return {
    type: TOGGLE_BORDERS,
    payload: bord
  };
}

export const ADD_COLOR = 'ADD_COLOR';
export function addColor() {
  return {
    type: ADD_COLOR
  };
}

export const REMOVE_COLOR = 'REMOVE_COLOR';
export function removeColor(idx) {
  return {
    type: REMOVE_COLOR,
    payload: idx
  };
}

export const ALTER_COLOR = 'ALTER_COLOR';
export function alterColor(idx, channel, newval) {
  console.log('action:', idx, channel, newval);
  return {
    type: ALTER_COLOR,
    payload: {idx: idx, channel: channel, newval: newval}
  };
}

export const SELECT_COLOR = 'SELECT_COLOR';

export function selectColor(idx, selectedId) {
  console.log('action! selectColor', selectedId);
  return {
    type: SELECT_COLOR,
    payload: {idx: idx, selectedId: selectedId}
  };
}

export const CLONE_COLOR = 'CLONE_COLOR';
export function cloneColor(idx) {
  return {
    type: CLONE_COLOR,
    payload: idx
  };
}

export const TOGGLE_LOCK = 'TOGGLE_LOCK';
export function toggleLock(idx) {
  return {
    type: TOGGLE_LOCK,
    payload: idx
  };
}

export const SET_BACKGROUND = "SET_BACKGROUND";
export function setBackground(idx, colorstring) {
  return {
    type: ALTER_COLOR,
    payload: {idx: idx, channel: backgroundColor, newval: colorstring}
  };
}

export const LINK_COLOR = "LINK_COLOR";
export function linkColor(linkIdx, attr) {
  return {
    type: LINK_COLOR,
    payload: { linkIdx: linkIdx, attr: attr }
  };
}

export const APPLY_STYLE = "APPLY_STYLE";
export function applyStyle(el, attr, val) {
  return {
    type: APPLY_STYLE,
    payload: {el: el, attr: attr, val: val}
  }
}

export const CLEAR_LINKS = "CLEAR_LINKS";
export function clearLinks() {
  return {
    type: CLEAR_LINKS,
    payload: null
  }
}
