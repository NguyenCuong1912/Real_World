import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ButtonFollow from './ButtonFollow'
import Favorite from './Favorite';
import { history } from './../../App';
import { ROUTE_CREATE_ARTICLES } from './../../route/path';
import { deleteArticle } from '../../redux/actions/ArticlesAction';

export default function GroupButton(props) {
    const { article } = props;
    const { user } = useSelector(state => state.UserReducer)
    return (
        <>
            {user.username === article.author.username ? <GroupButtonAuthor idArticle={article.slug} /> : <GroupButtonFollow author={article.author} article={article} />}
        </>
    )
}

const GroupButtonFollow = (props) => {
    const { author, article } = props;
    return <>
        <ButtonFollow author={author} idArt={article.slug} />
        &nbsp;
        {article.favorited ?
            <Favorite name='Unfavorite Article' article={article} username={author.username} _favorite='favorite' />
            :
            <Favorite name='Favorite Article' article={article} username={author.username} _favorite='favorite' />}
    </>


}
const GroupButtonAuthor = (props) => {
    const { idArticle } = props
    const dispatch = useDispatch()
    const handleDeleteArticle = () => {
        dispatch(deleteArticle(idArticle))
    }
    return <>
        <button onClick={() => {
            history.push(`${ROUTE_CREATE_ARTICLES}/${idArticle}`)
        }} class="btn btn-sm btn-outline-secondary">
            <i class="ion-edit"></i>
            &nbsp;
            Edit Article
        </button>
        &nbsp;&nbsp;
        <button onClick={() => { handleDeleteArticle() }} class="btn btn-sm btn-outline-danger">
            <i class="ion-trash-a"></i>
            &nbsp;
            Delete Article
        </button>
    </>
}