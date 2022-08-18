import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Comment from '../../../components/Comments/Comment';
import Loading from '../../../components/Loading/Loading';
import { handleDate } from '../../../Helper/Date';
import { getArticleById } from '../../../redux/actions/ArticlesAction';
import { createComment, getComment } from '../../../redux/actions/CommentAction';
import ArticleCss from '../CreateArticles/CreateArticles.module.css'
import GroupButton from './../../../components/Button/GroupButton';
export default function DetailsArticle(props) {
    const { idArticle } = props.match.params
    const dispatch = useDispatch();
    const { detailsArticles, } = useSelector(state => state.ArticlesReducer)
    const { user } = useSelector(state => state.UserReducer)
    const { comments } = useSelector(state => state.CommentReducer)
    const [body, setBody] = useState('')
    useEffect(() => {
        dispatch(getArticleById(idArticle))
        dispatch(getComment(idArticle))
    }, [])
    const renderTag = (tags) => {
        if (tags.length > 0) {
            return tags.map((tag, index) => {
                return <span style={{ backgroundColor: 'white', borderColor: 'rgb(129,138,145)', color: 'rgb(129,138,145)' }} className={ArticleCss.tag_span} key={index}>
                    {tag}
                </span>
            })

        }
    }
    const renderComment = () => {
        if (comments.length > 0) {
            return comments.map((comment, index) => {
                return <Comment idArticle={idArticle} comment={comment} key={index} />
            })
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        const tag = e.target;
        setBody(tag.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = {
            "comment": {
                "body": body
            }
        }
        dispatch(createComment(idArticle, comment))
        setBody('')

    }
    return (
        <Fragment>
            {detailsArticles.slug !== idArticle ?
                <Loading></Loading>
                :
                <div>
                    <div className="article-page">
                        <div className="banner">
                            <div className="container">
                                <h1>{detailsArticles.title}</h1>
                                <div className="article-meta">
                                    <a href><img src={detailsArticles.author.image} alt='image' /></a>
                                    <div className="info">
                                        <a href className="author">{detailsArticles.author.username}</a>
                                        <span className="date">{handleDate(detailsArticles.createdAt)}</span>
                                    </div>

                                    <GroupButton article={detailsArticles} />
                                </div>
                            </div>
                        </div>
                        <div className="container page">
                            <div className="row article-content">
                                <div className="col-md-12">
                                    <p>
                                        {detailsArticles.body}
                                    </p>
                                    <div>
                                        {renderTag(detailsArticles.tagList)}
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="article-actions">
                                <div className="article-meta">
                                    <a ><img src={detailsArticles.author.image} /></a>
                                    <div className="info">
                                        <a href className="author">{detailsArticles.author.username}</a>
                                        <span className="date">{handleDate(detailsArticles.createdAt)}</span>
                                    </div>
                                    <GroupButton article={detailsArticles} />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-md-8 offset-md-2">
                                    <form onSubmit={handleSubmit} className="card comment-form">
                                        <div className="card-block">
                                            <textarea id='body' onChange={handleChange} className="form-control" placeholder="Write a comment..." rows={3} value={body} />
                                        </div>
                                        <div className="card-footer">
                                            <img src={user.image} alt='' className="comment-author-img" />
                                            <button type='submit' className="btn btn-sm btn-primary">
                                                Post Comment
                                            </button>
                                        </div>
                                    </form>
                                    {renderComment()}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

        </Fragment>

    )
}
