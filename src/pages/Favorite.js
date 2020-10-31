import React from 'react';


const Favorite = () => {
    return (

        <div className="main-container">
            <div className="main-title"><h2>My favorite</h2></div>
            <div className="favorite-main">
                <div className="favorite-main-img"><img src="http://placehold.it/250x350"  alt='Coming sooon.....'/></div>
                <div className="favorite-main-information">
                    <div className="favorite-information-title">
                        <h2>FILM TITLE</h2>
                        <button type="button" className="btn btn-outline-secondary button-favorite-page">Unfavorite</button>
                    </div>
                    <div className="favorite-information-overview"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                </div>
            </div>


        </div>
    );
}

export default Favorite;