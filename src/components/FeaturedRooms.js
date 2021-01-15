import React,{ Component } from 'react';
import Title from './Title';
import {connect} from 'react-redux';
import Room from './Room';
import * as actions from '../actions/index';

class FeaturedRooms extends Component {

    componentDidMount() {
       this.props.fetchAllRooms();
    }

    render() {
        let { rooms } = this.props;
        if(rooms.length > 0) {
            rooms = rooms.filter(room => room.featured).map(room => <Room room={room} />)
        } 
        return (
            <div className='featured-rooms'> 
                <Title title='featured' />
                <div className="featured-rooms-center">
                    {rooms}
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRooms);
