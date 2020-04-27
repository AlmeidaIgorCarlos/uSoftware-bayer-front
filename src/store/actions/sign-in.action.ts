import stateSignInModel from '../../models/sign-in.model'

export function setSignInStateAction({ commit }: any, signInData: stateSignInModel): void {
    commit('setSignInStateMutation', signInData)
}