import { combineReducers } from 'redux';
import register from './registerReducer';
import post from './postReducer';
import artists from './artistReducer';
import featuredArtists from './featuredArtistReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    register,
    post,
    artists,
    featuredArtists,
    ajaxCallsInProgress
});

export default rootReducer;
