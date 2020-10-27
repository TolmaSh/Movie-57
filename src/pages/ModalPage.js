import React from 'react';


const ModalPage = (props) =>{
  return (
    <div className="modal-bg"
    style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${props.data[props.modalPage].poster_path})`,
        width: '100%',
        height: 'calc(100vh - 80px)',
        backgroundSize: "cover",
       
        backgroundPosition: 'center',
        backgroundColor: 'rgb(0, 0, 0, 0.7)'
  }}
    >
    <div className="modal-container">
        {/* MODAL HEADER */}
        <div className="modal-header">
            {/* HEADER-LEFT-BUTTON */}
                {/* LEFT-BUTTON-DESKTOP */}
            <div className="left-button-desktop active-button" onClick={()=>{props.setModalPage(null)}}>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                <span className="button-text">Back to list</span>
            </div>
                {/* LEFT-BUTTON-MOBILE */}
                <div className="left-button-mobile active-button" onClick={()=>{props.setModalPage(null)}}>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    <span className="button-text">Back</span>
                </div>
            {/* HEADER-RIGHT-BUTTON */}
                {/* RIGHT-BUTTON-DESKTOP */}
            {props.modalPage >= 19 ? null : 
            <div className="right-button-desktop active-button " onClick={()=>{props.setModalPage(props.modalPage + 1)}}>
            
            <span className="button-text" >Next Movie</span>
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
            </svg>
            </div> }
                {/* RIGHT-BUTTON-MOBILE */}
                {props.modalPage >= 19 ? null : 
            <div className="right-button-mobile active-button " onClick={()=>{props.setModalPage(props.modalPage + 1)}}>
            
            <span className="button-text" >Next</span>
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
            </div> }
    </div>
    
        {/* MODAL MAIN */}

        <div className="modal-main">
            <div className="modal-image">
            <img src={`http://image.tmdb.org/t/p/w342/${props.data[props.modalPage].poster_path}` } alt='Coming sooon.....'  />
            </div>
            <div className="main-information">
                <div className="modal-information-title-desktop"><h1>{props.data[props.modalPage].original_title} ({parseInt(props.data[props.modalPage].release_date)})</h1>
                
                </div>
                <div className="modal-information-score">
                    <span>Score: {props.data[props.modalPage].vote_average}</span>
                    <span>Rating: {props.data[props.modalPage].adult ? "R" : "PG-13"}</span>
                    <span>Realese Date: {props.data[props.modalPage].release_date}</span>
                </div>
                <div className="modal-information-overview-desktop" ><p>{props.data[props.modalPage].overview}</p></div>
            </div>
            

            </div>
            
            <div className="modal-information-title-mobile"><h1>{props.data[props.modalPage].original_title} ({parseInt(props.data[props.modalPage].release_date)})</h1></div>
            <div className="modal-information-overview-mobile" ><p>{props.data[props.modalPage].overview}</p></div>
</div> </div>
  );
}

export default ModalPage;