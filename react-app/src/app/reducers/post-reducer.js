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



function setEvaluation(state, post) {
    const newPosts = state.posts.map((item) => {
        if (post.id !== item.id)
            return item;

        return {
            ...item,
            ...post
        };
    });

    state.posts = newPosts;

    return { ...state, loading: false, error: false };
}

export default postsReducer;