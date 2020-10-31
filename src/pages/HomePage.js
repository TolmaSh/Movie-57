
import React, {useState, useEffect,} from 'react';
import Pagination from "react-js-pagination";
import ModalPage from "./ModalPage"



const HomePage = (props) => {
  const {setModalPage, modalPage} = props;
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [pagesAmount, setPagesAmount] = useState(1)
  
  // // let pagBtn = (btnNum) => setPage(btnNum.selected + 1);
  // For react-paginate

  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`)
            .then(res => res.json())
            .then(res => {
              setPage(res.page)
              setData(res.results)
              setPagesAmount(res.total_results)
            
            })
            .catch(error => console.error('Ошибка:', error))
  } ,[page])
  const Films = data
        .map((el, index) => {
            return <div key={el.id} onClick={() => { props.setModalPage(el)  }}  className='poster-wrap'>
                <div className='image-wrap'>
                    <img src={`http://image.tmdb.org/t/p/w342/${el.poster_path}` } alt='Coming sooon.....'  />
                    <div className='image-text'><div><strong>{el.original_title}</strong></div></div>
                </div>
            </div>
        })
if (props.modalPage == null) {
  return (
   <div className="main-container">
      <div className="main-title"><h2>Latest Releases</h2></div>
  <div className="main-content">{Films}</div>
  <div className="main-footer">
      <div className="footer-paginate">
        <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={pagesAmount}
        pageRangeDisplayed={3}
        onChange={setPage}
        prevPageText={'Prev'}
        nextPageText={'Next'}
        firstPageText={'First'}
        lastPageText={'Last'}
        hideDisabled={true}
        itemClass="page-item"
        linkClass="page-link"
          />
        </div>
  </div>
  
   </div>
  );
}
else {
  return (
    <ModalPage
    
    setModalPage={setModalPage}
    modalPage={modalPage}
    />
  )
}}

export default HomePage;