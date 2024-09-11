import { DELETE_SONG_REQUEST, DELETE_SONG_FAILURE } from "../../constants";


const initialState = {
  error: null,
};

export const songDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SONG_REQUEST:
      return { error: false };
    case DELETE_SONG_FAILURE:
      return { error: action.payload };
    default:
      return state
  }
};
