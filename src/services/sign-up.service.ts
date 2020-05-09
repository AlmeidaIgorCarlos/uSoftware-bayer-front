import axios from 'axios'
import routes from './routes.enum'
import stateSignUpModel from '../models/sign-up.model'

export async function signUp(signUpData: stateSignUpModel) {
    try {
        const callResult = await axios.post(process.env.VUE_APP_BASE_URL + routes.signUpRoute, signUpData)
        const { data } = callResult
        return data
    } catch (error) {
        if (error?.response)
            throw new Error(error.response.data.message)
        else throw error
    }
}

export function validateSignUp(signUpData: stateSignUpModel) {

    if (typeof signUpData.firstName != 'string' ||
        typeof signUpData.lastName != 'string' ||
        typeof signUpData.email != 'string' ||
        typeof signUpData.password != 'string' ||
        typeof signUpData.passwordConfirmation != 'string')
        return false

    return true
}

export function validateSignUpPassword(signUpData: stateSignUpModel) {
    const isPasswordValid = signUpData.password === signUpData.passwordConfirmation

    if (!isPasswordValid)
        return false

    return true
}