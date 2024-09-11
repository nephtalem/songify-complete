import { UPDATE_SONG_REQUEST } from "../../constants";

const initialState = {
    error:null
}

export const songUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SONG_REQUEST:
      return { error: false };
    default:
      return state;
  }
};