import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Articles from '../../components/Articles/Articles';
import ButtonFollow from '../../components/Button/ButtonFollow';
import { getProfileOfUserName } from '../../redux/actions/ProfileAction';
import { ROUTE_SETTINGS } from '../../route/path';
import { getArticles, getFavoriteArticle } from './../../redux/actions/ArticlesAction';
import { history } from './../../App';
import { ROUTE_HOME } from './../../route/path';
import Loading from '../../components/Loading/Loading';
export default function Profile(props) {
    const { username } = props.match.params;
    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.ProfileReducer)
    const { user } = useSelector(state => state.UserReducer)
    const { listArticles, articleFavorite } = useSelector(state => state.ArticlesReducer)
    const renderListArticles = (data, favorited = '') => {
        if (data.length > 0) {
            return data.map((articles, index) => {
                return <Articles username={username} favorited={favorited} articles={articles} key={index} />
            })
        } else {
            return <div> Articles...</div>
        }
    }
    const handleTab = (e) => {
        const tab = e.target;
        if (tab.id === 'favorite-tab') {
            dispatch(getFavoriteArticle(username))
        } else if (tab.id === 'myArt-tab') {
            dispatch(getArticles(username))
        }
    }
    const handleLogout = () => {
        window.localStorage.clear();
        history.push(ROUTE_HOME)
    }
    useEffect(() => {
        dispatch(getProfileOfUserName(username))
        dispatch(getArticles(username))
    }, [username])
    return (
        <Fragment>
            {profile.username !== username ?
                <Loading></Loading>
                :
                <div>
                    <div className="profile-page">
                        <div className="user-info">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-md-10 offset-md-1">
                                        <img src={profile.image} alt={profile.image} className="user-img" />
                                        <h4>{profile.username}</h4>
                                        {/* display bio */}
                                        {profile.username === user.username ?
                                            <p style={{ wordBreak: 'break-word' }}>{profile.bio}</p>
                                            :
                                            <></>
                                        }
                                        <div>
                                            <button onClick={() => { handleLogout() }} className='btn btn-sm btn-danger'>Logout</button>

                                        </div>
                                        {user.username === profile.username ?
                                            <Link to={`${ROUTE_SETTINGS}`} className="btn btn-sm  btn-outline-secondary action-btn ">
                                                <div>
                                                    <i className="ion-gear-a" />
                                                    &nbsp; Edit Profile Settings
                                                </div>
                                            </Link> :
                                            <Fragment>
                                                <ButtonFollow author={profile} addClass='action-btn' />
                                            </Fragment>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-10 offset-md-1">
                                    <div className="articles-toggle">
                                        <div>
                                            <ul className="nav nav-pills outline-active" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a onClick={handleTab} className="nav-link active" id="myArt-tab" data-toggle="tab" href="#myArt" role="tab" aria-controls="myArt" aria-selected="true">My Article</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a onClick={handleTab} className="nav-link " id="favorite-tab" data-toggle="tab" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">Favorited Articles</a>
                                                </li>

                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane active show" id="myArt" role="tabpanel" aria-labelledby="myArt-tab">
                                                    {renderListArticles(listArticles)}
                                                </div>
                                                <div className="tab-pane " id="favorite" role="tabpanel" aria-labelledby="favorite-tab">
                                                    {renderListArticles(articleFavorite, "favorited")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            }
        </Fragment>


    )
}

