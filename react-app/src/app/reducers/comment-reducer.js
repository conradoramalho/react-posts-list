import * as ACTIONS from '../actions/comment-actions';

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
            return { ...state, comments: {}, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default commentsReducer;