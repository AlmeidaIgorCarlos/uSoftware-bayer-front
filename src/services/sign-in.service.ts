import axios from 'axios'
import stateSignInModel from '../models/sign-in.model'
import routes from './routes.enum'
import { setLocalStorageItem } from '../services/local-storage.service'
import localStorageEnum from '../services/local-storage.enum'

export async function signIn(signInData: stateSignInModel) {
    try {
        const callResult = await axios.post(process.env.VUE_APP_BASE_URL + routes.signInRoute, {
            username: signInData.email,
            password: signInData.password
        })
        const { data } = callResult
        setLocalStorageItem(localStorageEnum.signin, data)
        return data
    } catch (error) {
        if (error?.response)
            throw new Error(error.response.data.message)
        else throw error
    }
}

export function validateSignIn(signInData: stateSignInModel) {
    const validTypes = typeof signInData.email === 'string' && typeof signInData.password === 'string'
    const validValues = signInData.email.length && signInData.password.length
    if (validTypes && validValues)
        return true
    else return false
}