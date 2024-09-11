import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  fetchSongsRequest,
} from "../actions/songAction";
import {
  ADD_SONG_REQUEST,
  DELETE_SONG_REQUEST,
  FETCH_SONGS_REQUEST,
  FETCH_STATISTICS_REQUEST,
  UPDATE_SONG_REQUEST,
} from "../../constants";
import songServices from "../../services/songServices";
import { addSongSuccess, addSongFailure } from "../actions/songAddAction";
import { deleteSongFailure } from "../actions/songDelete";
import { fetchStatisticsFailure, fetchStatisticsSuccess } from "../actions/songStatisticsAction";

function* fetchSongsApi() {
  // console.log("fetchSongsApi called");
  const response = yield songServices.getSong();

  if (response.error) {
    throw new Error("HTTP error!");
  }
  return response.docs;
}

function* fetchSongs() {
  try {
    const songs = yield call(fetchSongsApi);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.toString()));
  }
}
function* addSongApi(action) {
  try {
    yield songServices.addSong(action.payload);

    yield put(
      addSongSuccess({
        error: null,
        loading: false,
        songs: [],
      })
    );
    yield put(fetchSongsRequest());
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* deleteSongApi(action) {
  try {
    yield songServices.deleteSong(action.payload);
    yield put(fetchSongsRequest());
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

function* updateSongApi(action) {
  try {
    yield songServices.updateSong(action.id, action.payload);
    yield put(fetchSongsRequest());
  } catch (error) {
    console.log(error);
  }
}

function* fetchStatistics() {
  try {
    const result = yield songServices.getStatistics();
    console.log(result)
    yield put(fetchStatisticsSuccess(result))
  } catch (error) {
    yield put(fetchStatisticsFailure(error))
  }
}

function* watchFetchSongs() {
  yield takeLatest(FETCH_SONGS_REQUEST, fetchSongs);
  yield takeLatest(ADD_SONG_REQUEST, addSongApi);
  yield takeLatest(DELETE_SONG_REQUEST, deleteSongApi);
  yield takeLatest(UPDATE_SONG_REQUEST, updateSongApi);
  yield takeLatest(FETCH_STATISTICS_REQUEST, fetchStatistics);
}

export default function* rootSaga() {
  yield watchFetchSongs();
}
