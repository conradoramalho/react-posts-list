import {
    GET_POSTS,
    SET_EVALUATION_POSTS
} from '../actions'

const initialState = {
    posts: [],
    evaluation: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...action.payload };
        case SET_EVALUATION_POSTS:
            return { ...action.payload }
        default:
            return state;
    }
}

export default appReducer;