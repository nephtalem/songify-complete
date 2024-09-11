import {
  FETCH_STATISTICS_FAILURE,
  FETCH_STATISTICS_SUCCESS,
  FETCH_STATISTICS_REQUEST,
} from "../../constants";

const initialState = {
  statistics: {
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
    songsByGenre: [],
    songsAndAlbumsByArtist: [],
    songsByAlbum:[]
  },
  loading: false,
  error: null,
};

export const songStatistics = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATISTICS_REQUEST:
      return { ...state, loading: true };

    case FETCH_STATISTICS_SUCCESS:
      console.log(action.payload);
      return { ...state, loading: false, statistics: action.payload };

    case FETCH_STATISTICS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
