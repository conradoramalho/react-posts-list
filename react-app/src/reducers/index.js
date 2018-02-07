import {
    GET_POSTS,
    SET_EVALUATION_POST
} from '../actions'

const initialState = {
    posts: [],
    evaluation: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...action.payload };
        case SET_EVALUATION_POST:
            return setEvaluation(state, action.payload)
        default:
            return state;
    }
}

export default appReducer;

function setEvaluation(state, { postId, data }) {
    const newPosts = state.posts.map((item) => {
        if (postId !== item.id) {
            return item;
        }

        return {
            ...item,
            ...data
        };
    });

    state.posts = newPosts;

    return { ...state };
}