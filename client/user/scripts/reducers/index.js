import { combineReducers } from 'redux';
import register from './registerReducer';
import post from './postReducer';
import artists from './artistReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    register,
    post,
    artists,
    ajaxCallsInProgress
});

export default rootReducer;
