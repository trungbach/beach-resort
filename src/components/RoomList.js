import React, { Component } from 'react'
import {connect} from 'react-redux';
import Room from './Room';
import * as actions from '../actions/index';
class RoomList extends Component {

    componentDidMount() {
        this.props.fetchAllRooms();
    }

    render() {
        let { rooms, filter } = this.props;
        // filter room
        if(filter.type !== 'all') {
            rooms = rooms.filter(room => room.type === filter.type);
        }
        if(filter.price > 0) {
            rooms = rooms.filter(room => room.price <= filter.price);
        }

        if(filter.capacity > 1) {
            rooms = rooms.filter(room => room.capacity >= filter.capacity);
        }
        rooms = rooms.filter(room => room.size <= filter.maxSize && room.size >= filter.minSize);
        if(filter.pets) {
            rooms = rooms.filter(room => room.pets);
        }
        if(filter.breakfast) {
            rooms = rooms.filter(room => room.breakfast);
        }

        if(rooms.length > 0) {
            rooms = rooms.map(room => <Room room={room}/>)
        } 
        return (
            <div className='roomslist'>
                <div className="roomslist-center">
                    {rooms}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        filter: state.filterRoom
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllRooms: () => {
            dispatch(actions.fetchRoomsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);