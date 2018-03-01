import {
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAILURE,
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAILURE
} from '../actions/post-actions'

const INITIAL_STATE = {
    posts: [],
    post: {},
    loading: false,
    error: false,
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { ...state, loading: true };
        case POST_LIST_SUCCESS:
            return { ...state, posts: action.payload, loading: false, error: false };
        case POST_LIST_FAILURE:
            return { ...state, posts: [], loading: false, error: true };
        case POST_REQUEST:
            return { ...state, loading: true };
        case POST_SUCCESS:
            return { ...state, post: action.payload, loading: false, error: false };
        case POST_FAILURE:
            return { ...state, post: {}, loading: false, error: true };
        default:
            return state;
    }
}

export default postsReducer;

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

