import * as ACTIONS from '../actions/post-actions'

const initialState = {
    posts: [],
    post: {},
    hasPost: true,
    loading: false,
    error: false,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.POST_LIST_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.POST_LIST_SUCCESS:
            return { ...state, posts: action.payload, loading: false, error: false };
        case ACTIONS.POST_LIST_FAILURE:
            return { ...state, posts: [], loading: false, error: true };
        case ACTIONS.POST_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.POST_SUCCESS:
            return verifyPost(state, action.payload);
        case ACTIONS.POST_FAILURE:
            return { ...state, post: {}, loading: false, error: true };
        case ACTIONS.DELETE_POST_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.DELETE_POST_SUCCESS:
            return updatePost(state, action.payload);
        case ACTIONS.DELETE_POST_FAILURE:
            return { ...state, loading: false, error: true };
        case ACTIONS.EVALUATION_POST_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.EVALUATION_POST_SUCCESS:
            return updatePost(state, action.payload);
        case ACTIONS.EVALUATION_POST_FAILURE:
            return { ...state, post: {}, loading: false, error: true };
        default:
            return state;
    }
}

const updatePost = (state, post) => {
    const posts = state.posts.map(item => (item.id === post.id) ? { ...item, ...post } : item);
    return { ...state, posts, loading: false, error: false };
}

const verifyPost = (state, post) => {
    const hasPost = post.id ? true : false;

    return { ...state, post, hasPost, loading: false, error: false };
}

export default postsReducer;