import { commentServices } from "../../services/CommentServices"
import { SET_COMMENTS } from './../types/CommentType';

export const getComment = (idArticle) => {
    return async dispatch => {
        try {
            const result = await commentServices.getComment(idArticle);
            if (result.status === 200) {
                dispatch({
                    type: SET_COMMENTS,
                    comments: result.data.comments
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteComment = (idComment, idArticle) => {
    return async dispatch => {
        try {
            const result = await commentServices.deleteComment(idComment, idArticle);
            if (result.status === 200) {
                alert("Delete Success")
                dispatch(getComment(idArticle))
            }
        } catch (error) {
            alert("Error")
        }
    }
}

export const createComment = (idArticle, data) => {
    return async dispatch => {
        try {
            const result = await commentServices.createComment(idArticle, data);
            if (result.status === 200) {
                dispatch(getComment(idArticle))
            }
        } catch (error) {
            alert("Error")
        }
    }
}
