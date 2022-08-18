import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER } from './../../../route/path';

export default function HeaderLogin(props) {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container">
                    <Link to={ROUTE_HOME} className="navbar-brand" >conduit</Link>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            {/* Add "active" class when you're on that page" */}
                            <NavLink to={ROUTE_HOME} activeClassName='active' className="nav-link" href>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={ROUTE_LOGIN} activeClassName='active' className="nav-link" href>Sign in</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={ROUTE_REGISTER} activeClassName='active' className="nav-link" href>Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
