import ArtistApi from './../service/artist.service.js';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadArtistsSuccess(artists) {
    return { type: types.LOAD_ARTISTS_SUCCESS, artists };
}

export function loadArtists() {
    return dispatch => {

        dispatch(beginAjaxCall());

        return ArtistApi.getAllArtists().then(artists => {
            dispatch(loadArtistsSuccess(artists.result));
        }).catch(error => {
            throw (error);
        });
    };
}
