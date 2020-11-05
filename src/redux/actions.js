const FILM_ACTIONS = {
  SET_FAVOURITE: "SET_FAVOURITE",
  UNSET_FAVOURITE: "UNSET_FAVOURITE"
};

const setFavourite = filmData => {
  return {
    type: FILM_ACTIONS.SET_FAVOURITE,
    payload: filmData
  };
};
const unSetFavourite = id => {
  return {
    type: FILM_ACTIONS.UNSET_FAVOURITE,
    payload: id
  };
};

export { unSetFavourite, setFavourite, FILM_ACTIONS };
