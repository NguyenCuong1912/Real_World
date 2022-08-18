import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/UserActions';
import { ROUTE_LOGIN } from '../../route/path';
export default function Register() {

    const dispatch = useDispatch();
    const { errors } = useSelector(state => state.UserReducer)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const user = {
            "user": {
                "username": form.userName.value,
                "email": form.email.value,
                "password": form.password.value
            }
        }
        dispatch(register(user))
    }
    return (
        <div>
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign up</h1>
                            <p className="text-xs-center">
                                <Link to={ROUTE_LOGIN} > Have an account?</Link>
                            </p>
                            <ul className="error-messages">
                                {errors.username?.map((error, index) => {
                                    return <li key={index}>{`username ${error}`}</li>
                                })}
                                {errors.email?.map((error, index) => {
                                    return <li key={index}>{`email ${error}`}</li>
                                })}
                            </ul>
                            <form onSubmit={handleSubmit}>
                                <fieldset className="form-group">
                                    <input id='userName' className="form-control form-control-lg" type="text" placeholder="Your Name" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input id='email' className="form-control form-control-lg" type="text" placeholder="Email" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input id='password' className="form-control form-control-lg" type="password" placeholder="Password" />
                                </fieldset>
                                <button type='submit' className="btn btn-lg btn-primary pull-xs-right">
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
