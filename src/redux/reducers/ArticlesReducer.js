import { SET_ARTICLES_FEED, SET_LIST_ARTICLES, SET_DETAILS_ARTICLE, SET_ARTICLE_FAVORITE, SET_ARTICLES_TAG } from './../types/ArticlesType';

const initialState = {
    listArticles: [],
    articlesFeed: [],
    detailsArticles: {
        // author: "",
        // body: "",
        // createdAt: "",
        // description: "",
        // favorited: '',
        // favoritesCount: 0,
        // slug: "",
        // tagList: [],
        // title: "",
        // updatedAt: "",
    },
    articleFavorite: [],
    articleTag: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_ARTICLES: {
            state.articlesFeed = []
            return { ...state, listArticles: action.listArticles, articleFavorite: [] }
        }
        case SET_ARTICLES_FEED: {
            state.listArticles = []
            return { ...state, articlesFeed: action.articlesFeed }
        }
        case SET_DETAILS_ARTICLE: {
            return { ...state, detailsArticles: action.detailsArticles }
        }
        case SET_ARTICLE_FAVORITE: {
            return { ...state, articleFavorite: action.articleFavorite, listArticles: [] }
        }
        case SET_ARTICLES_TAG: {
            return { ...state, articleTag: action.articleTag }
        }
        default:
            return state
    }
}
