import { combineReducers } from "redux";
import songReducer from "./songReducer";
import { songAddReducer } from "./songAddReducer";
import { songDeleteReducer } from "./songDeleteReducer";
import { songUpdateReducer } from "./songUpdateReducer";
import { songStatistics } from "./statisticsReducer";
export default combineReducers({ songReducer, songAddReducer, songDeleteReducer, songUpdateReducer, songStatistics });
