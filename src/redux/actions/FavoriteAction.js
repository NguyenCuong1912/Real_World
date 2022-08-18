
import { history } from '../../App';
import { ROUTE_LOGIN } from '../../route/path';
import { favoriteServices } from './../../services/FavoriteServices';
import { getArticles, getArticleById, getArticlesFeed, getFavoriteArticle, getArticlesWithTag } from './ArticlesAction';
export const favorite = (id, username, favorite, type = '', tag) => {
    return async dispatch => {
        try {
            if (window.localStorage.getItem('username')) {
                const result = await favoriteServices.favorite(id);
                if (result.status === 200) {
                    if (username && favorite) {
                        dispatch(getArticleById(id))
                    } else if (username) {
                        dispatch(getArticles(username))
                    } else if (type === 'your') {
                        dispatch(getArticlesFeed())
                    } else if (tag) {
                        dispatch(getArticlesWithTag(tag))
                    } else {
                        dispatch(getArticles())
                    }
                }
            } else {
                history.push(ROUTE_LOGIN)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const unFavorite = (id, username, favorite, favorited, type = '', tag) => {
    return async dispatch => {
        try {
            const result = await favoriteServices.unFavorite(id);
            if (result.status === 200) {
                if (username && favorite) {
                    dispatch(getArticleById(id))
                } else if (username && favorited) {
                    dispatch(getFavoriteArticle(username))
                }
                else if (username) {
                    dispatch(getArticles(username))
                } else if (type === 'your') {
                    dispatch(getArticlesFeed())
                } else if (tag) {
                    dispatch(getArticlesWithTag(tag))
                } else {
                    dispatch(getArticles())
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}