import { combineReducers } from 'redux';
import appReducer from 'reducers/appReducer';
import colorReducer from 'reducers/colorReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 palette: colorReducer,
 app: appReducer,
 form: formReducer
});

export default rootReducer;
