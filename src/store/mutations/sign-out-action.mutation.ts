import stateActionModel from '../../models/action.model'

export function setSignOutActionStateMutation(state: any, actionData: stateActionModel) {
    Object.assign(state.signOutAction, actionData)
}