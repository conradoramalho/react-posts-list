import {
    GET_POSTS,
    GET_POST,
    GET_COMMENTS,
    SET_EVALUATION_POST,
    GET_POSTS_CATEGORY
} from '../actions'

const initialState = {
    post: {},
    posts: [],
    evaluation: '',
    comments: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [...action.payload] };
        case GET_POST:
            return { ...state, post: { ...action.payload } };
        case GET_POSTS_CATEGORY:
            return { ...state, posts: { ...action.payload } };
        case GET_COMMENTS:
            return { ...state, comments: { ...action.payload } };
        case SET_EVALUATION_POST:
            return setEvaluation(state, action.payload)
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