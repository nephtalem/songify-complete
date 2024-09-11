import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
} from "../../constants";

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songReducer = (state = initialState, action) => {
  // // return 1
  // // console.log(action)
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      // console.log("fetch request");
      return { ...state, loading: true };
    case FETCH_SONGS_SUCCESS:
      return { ...state, songs: action.payload, loading: false };
    case FETCH_SONGS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default songReducer;
