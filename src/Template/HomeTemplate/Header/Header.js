import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_CREATE_ARTICLES, ROUTE_HOME, ROUTE_PROFILE, ROUTE_SETTINGS } from '../../../route/path';
import { getUser } from './../../../redux/actions/UserActions';
export default function Header(props) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.UserReducer)
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container">
                    <Link to={ROUTE_HOME} className="navbar-brand" >conduit</Link>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            {/* Add "active" class when you're on that page" */}
                            <Link to={ROUTE_HOME} className="nav-link active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={ROUTE_CREATE_ARTICLES} className="nav-link" >
                                <i className="ion-compose" />&nbsp;New Article
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={ROUTE_SETTINGS} className="nav-link" >
                                <i className="ion-gear-a" />&nbsp;Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`${ROUTE_PROFILE}/${user.username}`} className="nav-link" >
                                <img src={user.image} alt='..' /> {user.username}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
