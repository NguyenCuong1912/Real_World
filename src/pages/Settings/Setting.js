import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../redux/actions/UserActions';
export default function Setting() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.UserReducer)
    useEffect(() => {
        dispatch(getUser())
    }, [])
    const handleChange = (e) => {
        e.preventDefault();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {
            "user": {
                "email": form.email.value,
                "password": form.password.value,
                "username": form.username.value,
                "bio": form.bio.value,
                "image": form.image.value
            }
        }
        dispatch(updateUser(user))
    }
    return (
        <div>
            <div className="settings-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Your Settings</h1>
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input id='image' defaultValue={user.image} className="form-control" type="text" placeholder="URL of profile picture" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input id='username' defaultValue={user.username} className="form-control form-control-lg" type="text" placeholder="Your Name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <textarea id='bio' className="form-control form-control-lg" rows={8} placeholder="Short bio about you" defaultValue={user.bio} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input id='email' defaultValue={user.email} className="form-control form-control-lg" type="text" placeholder="Email" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input id='password' className="form-control form-control-lg" type="password" placeholder="Password" />
                                    </fieldset>
                                    <button className="btn btn-lg btn-primary pull-xs-right">
                                        Update Settings
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
