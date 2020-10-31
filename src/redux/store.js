import { createStore, combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

const reducers = combineReducers({
  filmData: movieReducer
});

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
