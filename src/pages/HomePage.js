
import React, {useState, useEffect,} from 'react';
import ReactPaginate from 'react-paginate';


const HomePage = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [pagesAmount, setPagesAmount] = useState(1)
  let pagBtn = (btnNum) => setPage(btnNum.selected + 1);

  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`)
            .then(res => res.json())
            .then(res => {
              setData(res.results)
              setPagesAmount(res.total_pages)
            
            })
            .catch(error => console.error('Ошибка:', error))
  } ,[page])
  const Films = data
        .map((el, index) => {
            return <div key={el.id}  className='poster-wrap'>
                <div className='image-wrap'>
                    <img src={`http://image.tmdb.org/t/p/w342/${el.poster_path}`} alt='Coming sooon.....'  />
                    <div className='image-text'><div><strong>{el.original_title}</strong></div></div>
                </div>
            </div>
        })

  return (
   <div className="main-container">
      <div className="main-title"><h2>Latest Releases</h2></div>
  <div className="main-content">{Films}</div>
  <ReactPaginate
          previousLabel={'Previous'}
          itemsCountPerPage={20}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pagesAmount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={pagBtn}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /> 
   </div>
  );
}

export default HomePage;