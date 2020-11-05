import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import ModalPage from "./ModalPage";
import Header from "./Header"

const HomePage = (props) => {
  const [modalPage, setModalPage] = useState({
    filmData: null,
    id: 0,
    totalFilms: 0
  });
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(1);
  const [filmsAmountPerPage, setFilmsAmountPerPage] = useState(0);

  const setNextFilmHandler = id => {
    setModalPage({
      filmData: data[id],
      id: id + 1,
      totalFilms: filmsAmountPerPage
    });
  };

  const filmClickHandler = (el, id) => {

    setModalPage({
      filmData: el,
      id: id,
      totalFilms: filmsAmountPerPage
    });
  };
  // // let pagBtn = (btnNum) => setPage(btnNum.selected + 1);
  // For react-paginate

  useEffect(() => {
    fetch(
      `http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`
    )
      .then(res => res.json())
      .then(res => {
        setPage(res.page);
        setData(res.results);
        setFilmsAmountPerPage(res.results.length);
        setPagesAmount(res.total_results);
      })
      .catch(error => console.error("Ошибка:", error));
  }, [page]);
  const films = data.map((el, index) => {
    return (
      <div
        key={el.id}
        onClick={() => {
          filmClickHandler(el, index + 1);
        }}
        className="poster-wrap"
      >
        <div className="image-wrap">
          <img
            src={`http://image.tmdb.org/t/p/w342/${el.poster_path}`}
            alt="Coming sooon....."
          />
          <div className="image-text">
            <div>
              <strong>{el.original_title}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return modalPage?.filmData === null ? (
<>
    
      <div className= {modalPage?.filmData === null ? "" : "modal-menu"}>
              <Header 
              setModalPage={setModalPage}
              modalPage={modalPage}
              />
      </div>
    
    <div className="main-container">
        <div className="main-title">
          <h2>Latest Releases</h2>
        </div>
        <div className="main-content">{films}</div>
        <div className="main-footer">
          <div className="footer-paginate">
            <Pagination
              activePage={page}
              itemsCountPerPage={20}
              totalItemsCount={pagesAmount}
              pageRangeDisplayed={3}
              onChange={setPage}
              prevPageText={"Prev"}
              nextPageText={"Next"}
              firstPageText={"First"}
              lastPageText={"Last"}
              hideDisabled={true}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        </div>
      </div>
    </>
  ) : (
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
};

export default HomePage;
