import axios from 'axios'
import routes from './routes.enum'
import {getItemFromLocalStorage} from './local-storage.service'

export async function getVacancies() {
    try {
        const { data } = await axios.get(process.env.VUE_APP_BASE_URL + routes.vacanciesRoute, {
            headers: {
                Authorization: getItemFromLocalStorage('signin').access_token
            }
        })
        return data
    } catch (error) {
        return error
    }
}