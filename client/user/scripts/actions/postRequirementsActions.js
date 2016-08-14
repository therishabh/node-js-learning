import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function createPostSuccess(post) {
  return {type: types.CREATE_NEW_REQUIREMENT_SUCCESS, post};
}


export function savePost(post) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(post).then(post => {
        dispatch(createPostSuccess(post));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
