import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomList from '../components/RoomList';
import {Link} from 'react-router-dom';
import SearchRoom from '../components/SearchRoom';
const Rooms = () => {
    return (
        <>
            <Hero hero='roomsHero'>
                <Banner title='our rooms'>
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Hero>
            <SearchRoom />
            <RoomList />
        </>
    )
}
export default Rooms
