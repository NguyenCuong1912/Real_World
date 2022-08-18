import { Redirect } from "react-router-dom";
import { articles } from "../../services/ArticlesServices"
import { SET_LIST_ARTICLES, SET_ARTICLES_FEED, SET_DETAILS_ARTICLE, SET_ARTICLE_FAVORITE } from "../types/ArticlesType";
import { history } from './../../App';
import { ROUTE_CREATE_ARTICLES, ROUTE_HOME } from './../../route/path';
import { SET_ARTICLES_TAG } from './../types/ArticlesType';

export const getArticles = (author = '') => {
    return async dispatch => {
        try {
            const result = await articles.getArticles(author);
            if (result.status === 200) {
                dispatch({
                    type: SET_LIST_ARTICLES,
                    listArticles: result.data.articles
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getArticlesFeed = () => {
    return async dispatch => {
        try {
            const result = await articles.getArticlesFeed();
            if (result.status === 200) {
                dispatch({
                    type: SET_ARTICLES_FEED,
                    articlesFeed: result.data.articles
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const getArticlesWithTag = (tag) => {
    return async dispatch => {
        try {
            const result = await articles.getArticlesWithTag(tag);
            if (result.status === 200) {
                dispatch({
                    type: SET_ARTICLES_TAG,
                    articleTag: result.data.articles
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const createArticles = (data) => {
    return async dispatch => {
        try {
            const result = await articles.createArticles(data);
            if (result.status === 200) {
                history.push(ROUTE_HOME)
            }
        } catch (error) {
            alert("Error")
        }
    }
}

export const getArticleById = (id) => {
    return async dispatch => {
        try {
            const result = await articles.getArticlesById(id);
            if (result.status === 200) {
                dispatch({
                    type: SET_DETAILS_ARTICLE,
                    detailsArticles: result.data.article
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const getFavoriteArticle = (username) => {
    return async dispatch => {
        try {
            const result = await articles.getArticleWithFavorite(username);
            if (result.status === 200) {
                dispatch({
                    type: SET_ARTICLE_FAVORITE,
                    articleFavorite: result.data.articles
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const updateArticle = (id, data) => {
    return async dispatch => {
        try {
            const result = await articles.updateArticle(id, data);
            if (result.status === 200) {
                alert("Update Success");
                history.push(ROUTE_HOME)
            }
        } catch (error) {
            alert("Error")
        }
    }
}

export const deleteArticle = (id) => {
    return async dispatch => {
        try {
            const result = await articles.deleteArticle(id);
            if (result.status === 200) {
                alert("Delete Success")
                history.push(ROUTE_HOME)
            }
        } catch (error) {
            alert("Error")
        }
    }
}