import StateUserModel from './user.model'

type stateVacancyModel = {
    id: number
    title: string
    description: string
    isAvaiable: boolean
    createdAt: Date
    updatedAt: Date
    user: StateUserModel
}

export default stateVacancyModel