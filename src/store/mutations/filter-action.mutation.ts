import stateActionModel from '../../models/action.model'

export function setFilterActionStateMutation(state: any, actionData: stateActionModel) {
    Object.assign(state.filterAction, actionData)
}