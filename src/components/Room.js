import React from 'react';
import { Link } from 'react-router-dom';

function Room({room}) {
    console.log(room.images[0]);

        return (
            <div className='room'>
                <div className="img-container">
                   <img src={room.images[0]} />
                    {/* <img src={room.images[0].fields.file.url || 'https://i.imgur.com/iWkPYqS.jpg'} alt="single-room"/> */}
                    <div className="price-top">
                        <h6>{room.price}</h6>
                        <p>per night</p>
                    </div>
                    <Link to={`/rooms/${room.slug}`} className='room-link btn-primary'>featured</Link>
                </div>
                <p className="room-info">{room.name}</p>
            </div> 
        )
}

export default Room
