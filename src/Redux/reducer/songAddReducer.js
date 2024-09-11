import {
  ADD_SONG_REQUEST,
  ADD_SONG_SUCCESS,
  ADD_SONG_FAILURE,
} from "../../constants";

const initialState = {
  song: {},
  error: null,
  loading: false,
};

export const songAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_REQUEST:
      return { ...state, loading: true };
    case ADD_SONG_SUCCESS:
      return { ...state, loading: false, song: action.payload };
    case ADD_SONG_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state
  }
};
