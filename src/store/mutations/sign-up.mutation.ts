import stateSignUpModel from '../../models/sign-up.model'

export function setSignUpStateMutation(state: any, signUpData: stateSignUpModel) {
    Object.assign(state.signup, signUpData)
}