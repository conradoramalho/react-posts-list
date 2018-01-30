export const UPDATE_STATE = 'UPDATE_STATE';

export function update({ isVisible }) {
    return {
        type: UPDATE_STATE,
        isVisible
    }
}