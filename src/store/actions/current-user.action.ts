import stateCurrentUserModel from '../../models/current-user.model'

export function setCurrentUserStateAction({ commit }: any, currentUserData: stateCurrentUserModel): void {
    commit('setCurrentUserStateMutation', currentUserData)
}