import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFavourite, unSetFavourite } from "../redux/actions";

const ModalPage = (props) => {
    
    
    const dispatch = useDispatch();
    const favorFilms = useSelector(state => state.filmData.films);
    const isFavorite = favorFilms.some(v => v.id === props.modalPage.filmData.id);
    const clickHandler = () => {
        if (isFavorite) {
            dispatch(unSetFavourite(props.modalPage.filmData.id));
        } else {
            dispatch(setFavourite(props.modalPage.filmData));
        }
    };
    return (
        <div
            className="modal-bg"
            style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/original/${props.modalPage.filmData.poster_path})`,
                width: "100%",
                height: "100vh",
                backgroundSize: "cover",

                backgroundPosition: "center",
                backgroundColor: "rgb(0, 0, 0, 0.7)"
            }}
        >
            <div className="modal-container">
                {/* MODAL HEADER */}
                <div className="modal-header">
                    {/* HEADER-LEFT-BUTTON */}
                    {/* LEFT-BUTTON-DESKTOP */}
                    <div
                        className="left-button-desktop active-button"
                        onClick={() => {
                            props.setModalPage({ filmData: null, id: 0, totalFilms: 0 });
                        }}
                    >
                        <svg
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 16 16"
                            className="bi bi-arrow-left-circle"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                                fillRule="evenodd"
                                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                            />
                        </svg>
                        <span className="button-text">Back to list</span>
                    </div>
                    {/* LEFT-BUTTON-MOBILE */}
                    <div
                        className="left-button-mobile active-button"
                        onClick={() => {
                            props.setModalPage({ filmData: null, id: 0, totalFilms: 0 });
                        }}
                    >
                        <svg
                            width="2em"
                            height="2em"
                            viewBox="0 0 16 16"
                            className="bi bi-arrow-left-short"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                            />
                        </svg>
                        <span className="button-text">Back</span>
                    </div>
                    {/* HEADER-RIGHT-BUTTON */}
                    {/* RIGHT-BUTTON-DESKTOP */}
                    {props.modalPage.id >= props.modalPage.totalFilms ? null : (
                        <div
                            className="right-button-desktop active-button "
                            onClick={() => props.setNextFilm(props.modalPage.id)}
                        >
                            <span className="button-text">Next Movie</span>
                            <svg
                                width="1.5em"
                                height="1.5em"
                                viewBox="0 0 16 16"
                                className="bi bi-arrow-right-circle"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"
                                />
                            </svg>
                        </div>
                    )}
                    {/* RIGHT-BUTTON-MOBILE */}
                    {props.modalPage.id >= props.modalPage.totalFilms ? null : (
                        <div
                            className="right-button-mobile active-button "
                            onClick={() => props.setNextFilm(props.modalPage.id)}
                        >
                            <span className="button-text">Next</span>
                            <svg
                                width="2em"
                                height="2em"
                                viewBox="0 0 16 16"
                                className="bi bi-arrow-right-short"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                />
                            </svg>
                        </div>
                    )}
                </div>

                {/* MODAL MAIN */}

                <div className="modal-main">
                    <div className="modal-image">
                        <img
                            src={`http://image.tmdb.org/t/p/w342/${props.modalPage.filmData.poster_path}`}
                            alt="Coming sooon....."
                        />
                    </div>
                    <div className="main-information">
                        <div className="modal-information-title-desktop">
                            <h1>
                                {props.modalPage.filmData.original_title} (
                {parseInt(props.modalPage.filmData.release_date)})
              </h1>
                            <button
                                type="button"
                                className="btn btn-outline-secondary favorite-button"
                                onClick={clickHandler}
                            >
                                {isFavorite ? "UnFavorite" : "Add to favorite"}
                            </button>
                        </div>
                        {/* MODAL-INFORMATION-SCORE-DESKTOP */}
                        <div className="modal-information-desktop">
                            <div className="modal-information-score">
                                <span>
                                    Score:  {props.modalPage.filmData.vote_average}</span>
                                <span>
                                    Rating:  {props.modalPage.filmData.adult ? "R" : "PG-13"}</span>
                                <span>
                                    Realese Date:  {props.modalPage.filmData.release_date}</span>
                            </div>
                            <div className="modal-information-overview-desktop">
                                <p>{props.modalPage.filmData.overview}</p>
                            </div>
                        </div>
                        {/* MODAL-INFORMATION-MOBILE */}
                        <div className="modal-information-mobile">
                            <div className="modal-information-score">
                                <span>
                                
                                <b>Score:</b>{props.modalPage.filmData.vote_average}
                                
                                </span>
                                <span>
                                    <b>Rating:</b>  {props.modalPage.filmData.adult ? "R" : "PG-13"}
                                </span>
                                <span><b>Realese Date:</b>  {props.modalPage.filmData.release_date}</span>
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-secondary favorite-button mobile-favorite-button"
                                onClick={clickHandler}
                            >
                                {isFavorite ? 
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg> : 
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                              </svg>}
                            </button>
                        </div>
                       
                    </div>
                </div>

                <div className="modal-information-title-mobile">
                    <h1>
                        {props.modalPage.filmData.original_title} (
            {parseInt(props.modalPage.filmData.release_date)})
          </h1>
                </div>
                <div className="modal-information-overview-mobile">
                    <p>{props.modalPage.filmData.overview}</p>
                </div>
            </div>{" "}
        </div>
    );
};

export default ModalPage;
