import * as ACTIONS from '../actions/category-actions';

const initialState = {
    categories: [],
    postsCategory: [],
    loading: false,
    error: {}
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.CATEGORY_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.CATEGORY_REQUEST_SUCCESS:
            return { ...state, categories: action.payload.categories, loading: false, error: {} };
        case ACTIONS.CATEGORY_REQUEST_FAILURE:
            return { ...state, categories: [], loading: false, error: action.payload };
        case ACTIONS.POST_CATEGORY_LIST_REQUEST:
            return { ...state, loading: true };
        case ACTIONS.POST_CATEGORY_LIST_SUCCESS:
            return { ...state, postsCategory: action.payload, loading: false, error: {} };
        case ACTIONS.POST_CATEGORY_LIST_FAILURE:
            return { ...state, postsCategory: [], loading: false, error: action.payload };
        default:
            return state;
    }
}

export default categoriesReducer;