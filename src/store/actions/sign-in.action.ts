import stateSignInModel from '../../models/sign-in.models'

export function setSignInStateAction({ commit }: any, signInData: stateSignInModel): void {
    commit('setSignInStateMutation', signInData)
}