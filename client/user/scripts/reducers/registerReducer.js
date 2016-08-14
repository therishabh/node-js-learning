import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function registerReducer(state = initialState.register, action) {
  switch (action.type) {

    case types.CREATE_NEW_REGISTER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.register)
      ];

    default:
      return state;
  }
}
