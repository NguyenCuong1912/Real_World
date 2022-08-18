import Axios from 'axios'
import { DOMAIN, TOKEN } from './../utils/utils';
const token = window.localStorage.getItem(TOKEN);
export class BaseServices {
    get = (path) => {
        return Axios({
            method: "GET",
            url: `${DOMAIN}/${path}`,
            headers: { Authorization: `Token ${window.localStorage.getItem(TOKEN) ? token : ''}` }
        })
    }
    put = (path, data) => {
        return Axios({
            method: 'PUT',
            url: `${DOMAIN}/${path}`,
            data: data,
            headers: { Authorization: `Token ${window.localStorage.getItem(TOKEN) ? token : ''}` }
        })
    }
    post = (path, data) => {
        return Axios({
            method: 'POST',
            url: `${DOMAIN}/${path}`,
            data: data,
            headers: { Authorization: `Token ${window.localStorage.getItem(TOKEN) ? token : ''}` }
        })
    }
    delete = (path) => {
        return Axios({
            method: 'DELETE',
            url: `${DOMAIN}/${path}`,
            headers: { Authorization: `Token ${window.localStorage.getItem(TOKEN) ? token : ''}` }
        })
    }
}

