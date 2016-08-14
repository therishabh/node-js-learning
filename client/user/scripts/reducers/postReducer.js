import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postReducer(state = initialState.post, action) {
  switch (action.type) {

    case types.CREATE_NEW_REQUIREMENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.post)
      ];

    default:
      return state;
  }
}
