import { StateSignInModel } from '../../models/sign-in.models'

export function setSignInStateMutation(state: any, signInData: StateSignInModel) {
    Object.assign(state.signin, signInData)
}