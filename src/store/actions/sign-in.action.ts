import { StateSignInModel } from '../../models/sign-in.models'

export function setSignInStateAction({ commit }: any, signInData: StateSignInModel): void {
    commit('setSignInStateMutation', signInData)
}