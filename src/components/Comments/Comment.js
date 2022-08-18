import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment } from '../../redux/actions/CommentAction';
import { handleDate } from './../../Helper/Date';

export default function Comment(props) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.UserReducer)

    const { comment, idArticle, key } = props;
    const handleDeleteComment = (idComment) => {
        dispatch(deleteComment(idComment, idArticle))
    }
    return (
        <>
            {comment.author.username === user.username ?
                <div className="card" style={{ borderColor: 'cyan' }} key={key}>
                    <div className="card-block">
                        <p className="card-text">{comment.body}</p>
                    </div>
                    <div className="card-footer">
                        <a href className="comment-author">
                            <img src={comment.author.image} alt='' className="comment-author-img" />
                        </a>
                        &nbsp;
                        <a href className="comment-author">{comment.author.username}</a>
                        <span className="date-posted">{handleDate(comment.updatedAt)}</span>
                        <span onClick={() => {
                            handleDeleteComment(comment.id,)
                        }} className='mod-options'>
                            <i className='ion-trash-a' />
                        </span>
                    </div>
                </div>
                :
                <div className="card" key={key}>
                    <div className="card-block">
                        <p className="card-text">{comment.body}</p>
                    </div>
                    <div className="card-footer">
                        <a href className="comment-author">
                            <img src={comment.author.image} alt='' className="comment-author-img" />
                        </a>
                        &nbsp;
                        <a href className="comment-author">{comment.author.username}</a>
                        <span className="date-posted">{handleDate(comment.updatedAt)}</span>
                    </div>
                </div>
            }

        </>
    )
}
