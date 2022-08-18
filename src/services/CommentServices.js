import { BaseServices } from "./BaseServices";
const path = 'comments'
class CommentServices extends BaseServices {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
    getComment = (idArticle) => {
        return this.get(`/articles/${idArticle}/${path}`)
    }
    deleteComment = (idComment, idArticle) => {
        return this.delete(`/articles/${idArticle}/${path}/${idComment}`)
    }
    createComment = (idArticle, data) => {
        return this.post(`/articles/${idArticle}/${path}`, data)
    }
}
export const commentServices = new CommentServices();