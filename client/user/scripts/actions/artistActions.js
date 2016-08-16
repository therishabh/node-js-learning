import AuthorApi from './mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadArtistsSuccess(artists) {
  return {type: types.LOAD_ARTISTS_SUCCESS, artists};
}

export function loadArtists() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(artists => {
      dispatch(loadArtistsSuccess(artists));
    }).catch(error => {
      throw(error);
    });
  };
}
