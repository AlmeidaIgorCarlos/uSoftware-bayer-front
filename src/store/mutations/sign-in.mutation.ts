import stateSignInModel from '../../models/sign-in.model'

export function setSignInStateMutation(state: any, signInData: stateSignInModel) {
    Object.assign(state.signin, signInData)
}