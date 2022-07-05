import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './media.css';


function Media () {

    const videoYou = "https://www.youtube.com/watch?v=LGjNKqjWCKQ&ab_channel=AmixemR%C3%A9actions";

    return(
        <div className='media'>
            <h1>Media</h1>
            <h3>Vidéos</h3>
            <div>
                <ReactPlayer url={videoYou}/>
            </div>
            <h3>Photos</h3>
        </div>
    )
}

export default Media;