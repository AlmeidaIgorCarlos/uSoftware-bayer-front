import stateActionModel from '../../models/action.model'

export function setAddActionStateMutation(state: any, actionData: stateActionModel) {
    Object.assign(state.addAction, actionData)
}