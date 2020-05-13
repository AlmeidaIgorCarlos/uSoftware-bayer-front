import stateCurrentUserModel from '../../models/current-user.model'

export function setCurrentUserStateMutation(state: any, currentUserData: stateCurrentUserModel) {
    Object.assign(state.currentUser, currentUserData)
}