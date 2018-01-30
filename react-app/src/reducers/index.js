import { UPDATE_STATE } from '../actions'

const initialState = {
    isVisible: true
}

const appReducer = (state = initialState, action) => {
    console.log('action: ', action.isVisible);
    switch (action.type) {
        case UPDATE_STATE:
            return { ...state, isVisible: action.isVisible }
        default:
            return state;
    }
}

export default appReducer;