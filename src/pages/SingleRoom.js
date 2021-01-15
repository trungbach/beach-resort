import React, { Component } from 'react';
import { Link } from 'react-router-dom';    
import Loading from '../components/Loading';
import {connect} from 'react-redux';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import * as actions from '../actions/index';
class SingleRoom extends Component {

     componentDidMount() {
        this.props.fetchAllRooms();
    }

    render() {
        let {slug} = this.props.match.params;
        let room = this.props.rooms.find(room => room.slug === slug);
        return ( 
            room ? (
                <>
                    <StyledHero img={room.images[0].fields.file.url}>
                        <Banner title={`${room.name} room`}>
                            <Link to="/rooms" className="btn-primary">
                                back to rooms
                            </Link>
                        </Banner>
                    </StyledHero>
                    <div className='single-room'>
                        <div className="single-room-images">
                            {room.images.map((item, index) => {
                                if(index > 0)
                                    return (
                                        <img key={index} src={item.fields.file.url} alt={room.name} /> 
                                    )
                            })}
                        </div>
                        <div className="single-room-info">
                            <article className="desc">
                                <h3>details</h3>
                                <p>{room.description}</p>
                            </article>
                            <article className="info">
                                <h3>info</h3>
                                <h6>price : ${room.price}</h6>
                                <h6>size : {room.size} SQFT</h6>
                                <h6>
                                    max capacity :
                                    {room.capacity > 1 ? `${room.capacity} people` : `${room.capacity} person`}
                                </h6>
                                <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
                                <h6>{room.breakfast && "free breakfast included"}</h6>
                            </article>
                        </div>
                    </div>
                    <div className="room-extras">
                        <h6>extras </h6>
                        <ul className="extras">
                            {room.extras.map((item, index) => (
                            <li key={index}>- {item}</li>
                            ))}
                        </ul>
                    </div>
                </>
                )
                : <Loading />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllRooms: () => {
            dispatch(actions.fetchRoomsRequest());
        }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);
