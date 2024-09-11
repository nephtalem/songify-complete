import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
} from "../../constants";

export const fetchSongsRequest = () => {
    console.log('action is called')
  return {
    type: FETCH_SONGS_REQUEST,
  };
};
export const fetchSongsSuccess = (songs) => {
  return {
    type: FETCH_SONGS_SUCCESS,
    payload: songs,
  };
};
export const fetchSongsFailure = (error) => {
  return {
    type: FETCH_SONGS_FAILURE,
    payload: error,
  };
};
