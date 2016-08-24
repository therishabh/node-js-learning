import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function featuredArtistReducer(state = initialState.featuredArtists, action) {
    switch (action.type) {

        case types.LOAD_FEATURED_ARTISTS_SUCCESS:
            return action.featuredArtists;

        default:
            return state;
    }
}
