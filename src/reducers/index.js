import { combineReducers } from 'redux';
import rooms from './rooms';
import filterRoom from './filterRoom';
var myReducer = combineReducers({
    rooms,
    filterRoom
})

export default myReducer;