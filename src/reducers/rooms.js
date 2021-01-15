import * as Types from '../constants/ActionTypes';

let initialState = [];
var myReducer = (state = initialState, action) => {
        let newState = [...state];
        switch (action.type) {
            case Types.FETCH_ROOMS:      
                newState = action.rooms;
                return [...newState];
            default:
                return [...newState];
        }        

}
export default myReducer;