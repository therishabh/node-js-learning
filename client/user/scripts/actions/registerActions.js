import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function createRegisterSuccess(register) {
  return {type: types.CREATE_NEW_REGISTER_SUCCESS, register};
}


export function saveCourse(register) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(register).then(register => {
        dispatch(createRegisterSuccess(register));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
