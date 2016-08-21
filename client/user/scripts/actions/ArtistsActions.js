import ArtistApi from './../service/artist.service.js';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadArtistsSuccess(artists) {
    return { type: types.LOAD_ARTISTS_SUCCESS, artists };
}

export function loadMoreArtistsSuccess(artists) {
    return { type: types.LOAD_MORE_ARTISTS_SUCCESS, artists };
}

export function loadArtists() {
    return dispatch => {

        dispatch(beginAjaxCall());

        return ArtistApi.getArtists().then(artists => {
            dispatch(loadArtistsSuccess(artists.result));
        }).catch(error => {
            throw (error);
        });
    };
}


export function loadMoreArtists() {
    return dispatch => {

        dispatch(beginAjaxCall());

        return ArtistApi.getMoreArtists().then(artists => {
            dispatch(loadMoreArtistsSuccess(artists.result));
        }).catch(error => {
            throw (error);
        });
    };
}
