import { SET_PROFILE } from './../types/ProfileType';
const initialState = {
    profile: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state
    }
}
