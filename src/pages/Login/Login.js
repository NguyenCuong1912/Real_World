import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/UserActions';
import { ROUTE_REGISTER } from './../../route/path';
export default function Login() {
    const dispatch = useDispatch();
    const { errors } = useSelector(state => state.UserReducer)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {
            "user": {
                "email": form.email.value,
                "password": form.password.value
            }
        }
        dispatch(login(user))

    }
    return (
        <div>
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Login</h1>
                            <p className="text-xs-center">
                                <Link to={ROUTE_REGISTER}> Need an account?</Link>
                            </p>
                            {/* <ul class="error-messages">
                                {errors.username.map((error, index) => {
                                    return <li key={index}>{`username ${error}`}</li>
                                })}
                            </ul> */}
                            <form onSubmit={handleSubmit}>
                                <fieldset className="form-group">
                                    <input id='email' className="form-control form-control-lg" type="text" placeholder="Email" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input id='password' className="form-control form-control-lg" type="password" placeholder="Password" />
                                </fieldset>
                                <button type='submit' className="btn btn-lg btn-primary pull-xs-right">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
