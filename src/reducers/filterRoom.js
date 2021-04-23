import * as Types from '../constants/ActionTypes';

const initialState = {
    type: 'all',
    price: 600,
    capacity: 0,
    minSize: 0, 
    maxSize: 1000,
    minPrice: 0,
    maxPrice: 0,
    pets: false,
    breakfast: false,
}

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.FILTER_ROOMS:
            let newState = {...state,...action.filter};
            return newState;
        default: return {...state};    
    }
}

export default myReducer;