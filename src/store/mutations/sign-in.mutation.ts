import stateSignInModel from '../../models/sign-in.models'

export function setSignInStateMutation(state: any, signInData: stateSignInModel) {
    Object.assign(state.signin, signInData)
}