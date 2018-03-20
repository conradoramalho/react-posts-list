import * as ACTIONS from '../actions/post-actions'

const initialState = {
    posts: [],
    post: {},
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
            return { ...state, post: action.payload, loading: false, error: false };
        case ACTIONS.POST_FAILURE:
            return { ...state, post: {}, loading: false, error: true };
        case ACTIONS.EVALUATION_POST_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.EVALUATION_POST_SUCCESS:
            return setEvaluation(state, action.payload);
        case ACTIONS.EVALUATION_POST_FAILURE:
            return { ...state, post: {}, loading: false, error: true };
        default:
            return state;
    }
}

const setEvaluation = (state, post) => {
    const posts = state.posts.filter(item => item.id !== post.id);

    return { ...state, posts: [...posts, post], loading: false, error: false };
}

export default postsReducer;