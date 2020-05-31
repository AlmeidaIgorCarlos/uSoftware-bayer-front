import stateActionModel from '../../models/action.model'
import ActionName from '../../models/action-name.enum'

export function setStateActionBarAction({ commit }: any, stateActionModelData: stateActionModel): void {
    switch (stateActionModelData.actionName) {
        case ActionName.Add:
            commit('setAddActionStateMutation', stateActionModelData)
            break;
        case ActionName.Filter:
            commit('setFilterActionStateMutation', stateActionModelData)
            break;
        case ActionName.SignOut:
            commit('setSignOutActionStateMutation', stateActionModelData)
            break;
        default:
            throw new Error('Invalid ActionName')
    }
}