import moment from 'moment'
export const handleDate = (date) => {
    return moment(date).format('LL')
}