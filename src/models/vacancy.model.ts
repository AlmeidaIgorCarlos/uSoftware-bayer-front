import StateUserModel from './user.model'

type stateVacancyModel = {
    id: number
    title: string
    description: string
    is_avaiable: boolean
    createdAt: Date
    updatedAt: Date
    user: StateUserModel
}

export default stateVacancyModel