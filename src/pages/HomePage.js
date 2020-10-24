
import React, {useState, useEffect,} from 'react';


const HomePage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(error => console.error('Ошибка:', error))
  } ,[])
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
   </div>
  );
}

export default HomePage;