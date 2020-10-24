import { createStore, combineReducers } from 'redux';
import MovieReducer from './MovieReducer';

const reducers = combineReducers({
    mainData: MovieReducer
})

const store = createStore(reducers)

export default store;