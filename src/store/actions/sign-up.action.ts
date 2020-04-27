import stateSignUpModel from '../../models/sign-up.model'

export function setSignUpStateAction({ commit }: any, signUpData: stateSignUpModel): void {
    commit('setSignUpStateMutation', signUpData)
}