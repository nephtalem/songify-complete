import {FETCH_STATISTICS_SUCCESS, FETCH_STATISTICS_REQUEST, FETCH_STATISTICS_FAILURE } from "../../constants";



export const fetchStatisticsRequest = () => {
  return {
    type: FETCH_STATISTICS_REQUEST,
  };
};
export const fetchStatisticsSuccess = (statistics) => {
  return {
    type: FETCH_STATISTICS_SUCCESS,
    payload: statistics,
  };
};
export const fetchStatisticsFailure = (error) => {
  return {
    type: FETCH_STATISTICS_FAILURE,
    payload: error,
  };
};
