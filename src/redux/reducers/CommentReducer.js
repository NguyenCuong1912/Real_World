import { SET_COMMENTS } from './../types/CommentType';

const initialState = {
    comments: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case SET_COMMENTS:
            return { ...state, comments: action.comments }

        default:
            return state
    }
}
