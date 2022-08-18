import React from 'react'
import { useDispatch } from 'react-redux';
import { follow } from '../../redux/actions/ProfileAction';
import { unFollow } from './../../redux/actions/ProfileAction';

export default function ButtonFollow(props) {
    const dispatch = useDispatch();
    const { author, addClass = '', idArt = '' } = props;
    const handleFollow = () => {
        dispatch(follow(author.username, idArt))
    }
    const handleUnFollow = () => {
        dispatch(unFollow(author.username, idArt))
    }
    return (
        <>
            {author.following ?
                <button onClick={() => { handleUnFollow() }} className={`btn btn-sm btn-outline-secondary ${addClass}`}>
                    <i className="ion-plus-round" />
                    &nbsp;
                    {`Unfollow ${author.username}`}
                </button>
                :
                <button onClick={() => { handleFollow() }} className={`btn btn-sm btn-outline-secondary ${addClass}`}>
                    <i className="ion-plus-round" />
                    &nbsp;
                    {`Follow ${author.username}`}
                </button>
            }


        </>
    )
}
