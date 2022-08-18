import { SET_ERROR, SET_USER } from "../types/UserType"

const initialState = {
    user: {},
    errors: {
        username: [],
        email: [],
        password: []
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user }
        case SET_ERROR: {
            return { ...state, errors: action.errors }
        }
        default:
            return state
    }
}
