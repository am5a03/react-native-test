export const REQUEST = "REQUEST";
export const RECEIVE = "RECEIVE";

export function requestPosts() {
    return {
        type: REQUEST
    }
}

export function receivePosts(items) {
    return {
        type: RECEIVE,
        items
    }
}

export function fetchPosts() {
    console.log("fetchPosts");
    return dispatch => {
        dispatch(requestPosts());
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}