
import { BaseServices } from './BaseServices';
const path = `articles`
class Articles extends BaseServices {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    getArticles = (author) => {
        if (!author) {
            return this.get(`${path}`)
        } else {
            return this.get(`${path}?author=${author}`)
        }
    }
    getArticlesWithTag = (tag) => {
        return this.get(`${path}?tag=${tag}`)
    }
    // get Articles from user follow
    getArticlesFeed = () => {
        return this.get(`${path}/feed`)
    }
    getArticleWithFavorite = (username) => {
        return this.get(`${path}?favorited=${username}`)
    }
    getArticlesById = (id) => {
        return this.get(`${path}/${id}`)
    }
    getArticleWithTag = (tagName) => {
        return this.get(`${path}?tag=${tagName}`)
    }
    createArticles = (data) => {
        return this.post(path, data)
    }
    updateArticle = (id, data) => {
        return this.put(`${path}/${id}`, data)
    }
    deleteArticle = (id) => {
        return this.delete(`${path}/${id}`)
    }
}

export const articles = new Articles();