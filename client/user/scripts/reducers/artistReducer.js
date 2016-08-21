import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function artistReducer(state = initialState.artists, action) {
    switch (action.type) {
        case types.LOAD_ARTISTS_SUCCESS:
            return action.artists;

        case types.LOAD_MORE_ARTISTS_SUCCESS:
            debugger;

            return  [...state, ...action.artists];

        default:
            return state;
    }
}
