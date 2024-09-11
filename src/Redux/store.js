import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer"; // Your combined reducers
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/songSaga"; // Your root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  // Use the default middleware and add sagaMiddleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

console.log("Saga Middleware Initialized");

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
