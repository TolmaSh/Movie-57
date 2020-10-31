import { FILM_ACTIONS } from "./actions";

const INITITAL_STATE = {
  abc: "",
  films: []
};

const movieReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case FILM_ACTIONS.SET_FAVOURITE: {
      return {
        ...state,
        films: [...state.films,action.payload]
      };
    }
    case FILM_ACTIONS.UNSET_FAVOURITE: {
      return {
        ...state,
        films: state.films.filter(filmId => filmId !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
};

export { movieReducer };
