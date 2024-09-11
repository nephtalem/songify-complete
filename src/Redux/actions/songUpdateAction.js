import { UPDATE_SONG_REQUEST } from "../../constants";

export const updateSongRequest = (id, song) => {
  return {
    type: UPDATE_SONG_REQUEST,
    payload: song, 
    id
  };
};
