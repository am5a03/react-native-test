import { combineReducers } from 'redux';
import {REQUEST, RECEIVE} from './actions';

function posts(state = {
    isFetching: false,
    didRefresh: false,
    items: []
}, action) {
    console.log(action);
    switch (action.type) {
        case REQUEST:
            return Object.assign({}, state, {
                didRefresh: true
            })
        case RECEIVE:
            return Object.assign({}, state, {
                didRefresh: true,
                isFetching: false,
                items: action.items
            })
        default:
            return state;      
    }
}

const rootReducer = combineReducers({
    posts
});
  
export default rootReducer;