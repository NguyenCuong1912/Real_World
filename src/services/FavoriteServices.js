
import { BaseServices } from './BaseServices';
const path = 'articles'
class FavoriteServices extends BaseServices {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
    favorite = (id) => {
        return this.post(`${path}/${id}/favorite`)
    }
    unFavorite = (id) => {
        return this.delete(`${path}/${id}/favorite`)

    }


}

export const favoriteServices = new FavoriteServices();