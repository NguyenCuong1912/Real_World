import React from 'react'
import { useDispatch } from 'react-redux';
import { favorite, unFavorite } from '../../redux/actions/FavoriteAction';
export default function Favorite(props) {
    const dispatch = useDispatch();
    const { name = '', article, username = '', _favorite = '' } = props;

    const handleFavorite = (slug) => {
        if (username) {
            dispatch(favorite(slug, username, _favorite))
        } else {
            dispatch(favorite(slug))
        }
    }
    const handleUnFavorite = (slug) => {
        if (username) {
            dispatch(unFavorite(slug, username, _favorite))
        } else {
            dispatch(unFavorite(slug))
        }
    }
    return (
        <>
            {
                article.favorited ?
                    <button onClick={() => {
                        handleUnFavorite(article.slug);
                    }} style={{ backgroundColor: 'rgb(68,157,68)', color: 'white' }} className="btn btn-outline-primary btn-sm ">
                        <i className="ion-heart" />  &nbsp;
                        {name} <span className="counter"> {name ? <>{`(${article.favoritesCount})`}</> : <>{article.favoritesCount}</>}</span>
                    </button> :
                    <button onClick={() => {
                        handleFavorite(article.slug);
                    }} className="btn btn-outline-primary btn-sm">
                        <i className="ion-heart" />
                        &nbsp;
                        {name} <span className="counter"> {name ? <>{`(${article.favoritesCount})`}</> : <>{article.favoritesCount}</>}</span>
                    </button>
            }
        </>
    )
}
