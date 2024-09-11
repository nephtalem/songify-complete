// actions/songActions.js
import {
  ADD_SONG_REQUEST,
  ADD_SONG_SUCCESS,
  ADD_SONG_FAILURE,
} from "../../constants";

export const addSongRequest = (song) => {
  console.log(song);
  return {
    type: ADD_SONG_REQUEST,
    payload: song, // The new song details
  };
};

export const addSongSuccess = (newSong) => {
  return {
    type: ADD_SONG_SUCCESS,
    payload: newSong,
  };
};

export const addSongFailure = (error) => {
  return {
    type: ADD_SONG_FAILURE,
    payload: error,
  };
};
