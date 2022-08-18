import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTE_PROFILE } from '../../route/path';
import { useDispatch } from 'react-redux';
import { favorite, unFavorite } from '../../redux/actions/FavoriteAction';
import { handleDate } from '../../Helper/Date';

export default function Articles(props) {
    const { articles, keyArt, username = '', _favorite = '', type, favorited, tag = '' } = props;
    const dispatch = useDispatch();

    const handleFavorite = (slug) => {
        if (username) {
            dispatch(favorite(slug, username, _favorite))
        } else {
            dispatch(favorite(slug, '', '', type, tag))
        }
    }
    const handleUnFavorite = (slug) => {
        if (username) {
            dispatch(unFavorite(slug, username, _favorite, favorited))
        } else {
            dispatch(unFavorite(slug, '', '', '', type, tag))
        }
    }
    const renderTagList = (tagList) => {
        return tagList?.map((tag, index) => {
            return <li className="tag-default tag-pill tag-outline" key={index}>{tag}</li>
        })
    }
    return (
        <div id='global' className="article-preview" key={`${keyArt}`}>
            <div className="article-meta">
                <Link to={`${ROUTE_PROFILE}/${articles.author.username}`}><img src={`${articles.author.image}`} alt={`${articles.author.image}`} /></Link>
                <div className="info">
                    <Link to={`${ROUTE_PROFILE}/${articles.author.username}`} className="author">{articles.author.username}</Link>
                    <span className="date">{handleDate(articles.createdAt)}</span>
                </div>
                {
                    articles.favorited ?
                        <button onClick={() => {
                            handleUnFavorite(articles.slug);
                        }} style={{ backgroundColor: 'green', color: 'white' }} className="btn btn-outline-primary btn-sm pull-xs-right">
                            <i className="ion-heart" /> {articles.favoritesCount}
                        </button> :
                        <button onClick={() => {
                            handleFavorite(articles.slug);
                        }} className="btn btn-outline-primary btn-sm pull-xs-right">
                            <i className="ion-heart" /> {articles.favoritesCount}
                        </button>
                }
            </div>
            <Link to={`/article/${articles.slug}`} className="preview-link">
                <h1>{articles.title}</h1>
                <p>{articles.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                    {renderTagList(articles.tagList)}
                </ul>
            </Link>
        </div>
    )
}
