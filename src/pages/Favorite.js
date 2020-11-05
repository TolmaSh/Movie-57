import React, {useState} from 'react';
import ModalPage from '../pages/ModalPage'
import { useSelector , useDispatch } from 'react-redux';
import { unSetFavourite } from '../redux/actions';
import Header from "./Header"


const Favorite = (props) => {
    
    
    
    const dispatch = useDispatch();
    
    const favoriteFilms = useSelector(state => state.filmData.films)
    const [modalPage, setModalPage] = useState({
        filmData: null,
        id: 0,
        totalFilms: favoriteFilms.length
      });
    const unSetFavoriteHandler = id => {
        return dispatch(unSetFavourite(id));
    }
      

    const setNextFilmHandler = id => {
        setModalPage({
          filmData: favoriteFilms[id],
          id: id + 1,
          totalFilms: favoriteFilms.length
        });
      };
    
      const filmClickHandler = (el , id) => {
          
        setModalPage({
          filmData: el,
          id: id,
          totalFilms: favoriteFilms.length
        });
      };


    const films = favoriteFilms.length > 0 ? favoriteFilms.map((film,index) => (
    <div className="favorite-main" key={film.id}>
    <div className="favorite-main-img " 
    onClick={() => {
        filmClickHandler(film, index + 1);
      }} ><img src={`http://image.tmdb.org/t/p/w342/${film.poster_path}`}  alt='Coming sooon.....'/></div>
    <div className="favorite-main-information">
        <div className="favorite-information-title">
            <h2>{film.original_title}</h2>
            <button type="button" className="btn btn-outline-secondary button-favorite-page"  onClick={() => unSetFavoriteHandler(film.id) }>Unfavorite</button>
        </div>
    <div className="favorite-information-overview"><p>{film.overview}</p></div>
    </div>
</div>
)) : (<p>You dont have favourites films ;(</p>);


    return modalPage?.filmData === null ? (
    <>

        <div className= {modalPage?.filmData === null ? "" : "modal-menu"}>
              <Header
              setModalPage={setModalPage}
              modalPage={modalPage}
              />
        </div>
        <div className="main-container">
            <div className="main-title"><h2>My favorite</h2></div>
            {films}
            


        </div>
        
    </>
        )
    
    : (
    <>
        <div className= {modalPage?.filmData === null ? "" : "modal-menu"}>
              <Header
              setModalPage={setModalPage}
              modalPage={modalPage}
              />
        </div>
        <ModalPage
          setModalPage={setModalPage}
          modalPage={modalPage}
          setNextFilm={setNextFilmHandler}
        />
    </>
      );
}

export default Favorite;