import { SET_PROFILE } from '../types/ProfileType';
import { profileServices } from './../../services/ProfileServices';
import { getArticleById } from './ArticlesAction';
import { history } from './../../App';
import { ROUTE_LOGIN } from '../../route/path';
export const getProfileOfUserName = (username) => {
    return async (dispatch) => {
        try {
            const result = await profileServices.proOfUserName(username);
            if (result.status === 200) {
                dispatch({
                    type: SET_PROFILE,
                    profile: result.data.profile
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const follow = (username, idArt) => {
    return async dispatch => {
        try {
            if (window.localStorage.getItem('username')) {
                const result = await profileServices.followUser(username);
                if (result.status === 200) {
                    if (idArt) {
                        dispatch(getArticleById(idArt))
                    } else {
                        dispatch(getProfileOfUserName(username))
                    }
                }
            } else {
                history.push(ROUTE_LOGIN)
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const unFollow = (username, idArt) => {
    return async dispatch => {
        try {
            const result = await profileServices.unFollowUser(username);
            if (result.status === 200) {
                if (idArt) {
                    dispatch(getArticleById(idArt))
                } else {
                    dispatch(getProfileOfUserName(username))
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}