import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postReducer(state = initialState.courses, action) {
  switch (action.type) {

    case types.CREATE_NEW_REQUIREMENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
