import * as ACTIONS from '../actions/types';

const initialState = {
    comments: [],
    loading: false,
    error: {}
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.COMMENTS_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.COMMENTS_REQUEST_SUCCESS:
            return { ...state, comments: action.payload, loading: false, error: {} };
        case ACTIONS.COMMENTS_REQUEST_FAILURE:
            return { ...state, comments: [], loading: false, error: action.payload };
        case ACTIONS.COMMENTS_NEW_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.COMMENTS_NEW_REQUEST_SUCCESS:
            return { ...state, comments: [...state.comments, action.payload], loading: false, error: {} };
        case ACTIONS.COMMENTS_NEW_REQUEST_FAILURE:
            return { ...state, comments: [], loading: false, error: action.payload };
        case ACTIONS.UPDATE_COMMENTS_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.UPDATE_COMMENTS_REQUEST_SUCCESS:
            return updateCommentSuccess(state, action.payload)
        case ACTIONS.UPDATE_COMMENTS_REQUEST_FAILURE:
            return { ...state, comments: [], loading: false, error: action.payload };
        case ACTIONS.DELETE_COMMENT_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.DELETE_COMMENT_REQUEST_SUCCESS:
            return updateCommentSuccess(state, action.payload)
        case ACTIONS.DELETE_COMMENT_REQUEST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default commentsReducer;

const updateCommentSuccess = (state, comment) => {
    const newComments = state.comments.map((item) => {
        if (comment.id !== item.id)
            return item;

        return {
            ...item,
            ...comment
        };
    });

    state.comments = newComments;

    return { ...state, loading: false, error: false };
}
