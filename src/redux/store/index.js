import { combineReducers, configureStore } from "@reduxjs/toolkit";

import favouriteReducer from "../reducers/favouriteReducer";
import searchJobReducer from "../reducers/searchJobReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  searchJob: searchJobReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
