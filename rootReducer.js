import { combineReducers } from 'redux';

export const REQUEST = "REQUEST";
export const RECEIVE = "RECEIVE";

function posts(state = {
    isFetching: false,
    didRefresh: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST:
            return Object.assign({}, state, {
                didRefresh: true
            })
        case RECEIVE:
            return Object.assign({}, state, {
                didRefresh: true,
                isFetching: false,
                items: state.items.concat(action.posts)
            })
        default:
            return state;      
    }
}

const rootReducer = combineReducers({
    posts
});
  
  export default rootReducer;