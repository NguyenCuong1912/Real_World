
import { BaseServices } from './BaseServices';
const path = 'profiles'
class ProfileServices extends BaseServices {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
    proOfUserName = (username) => {
        return this.get(`${path}/${username}`)
    }
    followUser = (username) => {
        return this.post(`${path}/${username}/follow`)
    }
    unFollowUser = (username) => {
        return this.delete(`${path}/${username}/follow`)
    }
}

export const profileServices = new ProfileServices();