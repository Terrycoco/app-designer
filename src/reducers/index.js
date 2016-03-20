import { combineReducers } from 'redux';
import appReducer from 'reducers/appReducer';
import colorReducer from 'reducers/colorReducer';
import styleReducer from 'reducers/styleReducer';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 palette: colorReducer,
 app: appReducer,
 // form: formReducer
 styles: styleReducer
});

export default rootReducer;
