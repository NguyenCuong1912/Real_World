import { userServices } from './../../services/UserServices';
import { history } from './../../App';
import { TOKEN } from '../../utils/utils';
import { SET_ERROR, SET_USER } from './../types/UserType';
import { ROUTE_LOGIN } from '../../route/path';
import { ROUTE_HOME } from './../../route/path';
export const register = (user) => {
    return async dispatch => {
        try {
            const result = await userServices.register(user);
            if (result.status === 200) {
                alert("Bạn đã đăng kí thành công tào khoản")
                history.push(ROUTE_LOGIN)
            }
        } catch (error) {
            dispatch({
                type: SET_ERROR,
                errors: error.response.data.errors
            })
        }
    }
}

export const login = (user) => {
    return async dispatch => {
        try {
            const result = await userServices.login(user);
            if (result.status === 200) {
                window.localStorage.setItem(TOKEN, result.data.user.token)
                window.localStorage.setItem("username", result.data.user.username)
                alert("Đăng nhập thành công")
                history.push(ROUTE_HOME)
            }
        } catch (error) {
            alert("Đăng nhập thất bại")

        }

    }
}

export const getUser = () => {
    return async dispatch => {
        try {
            const result = await userServices.getUser();
            if (result.status === 200) {
                dispatch({
                    type: SET_USER,
                    user: result.data.user
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateUser = (data) => {
    return async dispatch => {
        try {
            const result = await userServices.updateUser(data);
            if (result.status === 200) {
                window.localStorage.setItem(TOKEN, result.data.user.token)
                alert("Update thành công")
                history.push(ROUTE_HOME)
            }
        } catch (error) {
            alert("Update thất bại")

        }
    }
}