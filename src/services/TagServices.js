
import { BaseServices } from './BaseServices';
const path = 'tags'
class TagServices extends BaseServices {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
    getTag = () => {
        return this.get(path)
    }
}
export const tagServices = new TagServices(); 