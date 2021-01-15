import * as Types from '../constants/ActionTypes';
import {callApi} from '../utils/callAPI';

export const fetchRoomsRequest = () => {
    return (dispatch) => {
        return callApi().then(res => dispatch(fetchRooms(res.data)));
    }
} 

export const fetchRooms = (rooms) => {
    return {
        type: Types.FETCH_ROOMS,
        rooms
    }
}

export const filterRoom = (rooms, filter) => {
    return {
        type: Types.FILTER_ROOMS,
        rooms,
        filter
    }
}
