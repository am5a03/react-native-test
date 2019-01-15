import { combineReducers } from 'redux';

const REQUEST = "REQUEST";
const RECEIVE = "RECEIVE";

function posts(state = {
    isFetching: false,
    didRefresh: false,
    items: []
}, action) {
    
}

const rootReducer = combineReducers({
    posts
});
  
  export default rootReducer;