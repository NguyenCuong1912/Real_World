import { BaseServices } from './BaseServices';
const path = 'users'
class UserServices extends BaseServices {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    register = (data) => {
        return this.post(path, data)
    }
    login = (data) => {
        return this.post(`${path}/login`, data)
    }
    getUser = () => {
        return this.get('user')
    }
    updateUser = (data) => {
        return this.put(`user`, data)
    }

}
export const userServices = new UserServices();