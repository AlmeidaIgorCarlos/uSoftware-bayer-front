import axios from 'axios'
import routes from './routes.enum'
import { getItemFromLocalStorage } from './local-storage.service'

export async function getVacancies() {
    const token = getItemFromLocalStorage('signin').access_token

    const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}${routes.vacanciesRoute}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export async function getVacancyById(id: number) {
    const token = getItemFromLocalStorage('signin').access_token

    const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}${routes.vacanciesRoute}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export async function deactivateVacancy(vacancy: any) {
    const token = getItemFromLocalStorage('signin').access_token

    const { data } = await axios.put(`${process.env.VUE_APP_BASE_URL}${routes.vacanciesRoute}/${vacancy.id}`, {
        title: vacancy.title,
        description: vacancy.description,
        isAvaiable: false
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export async function deleteVacancy(vacancy: any) {
    const token = getItemFromLocalStorage('signin').access_token

    const { data } = await axios.delete(`${process.env.VUE_APP_BASE_URL}${routes.vacanciesRoute}/${vacancy.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export async function saveVacancy(vacancy: any) {
    const token = getItemFromLocalStorage('signin').access_token
    console.log(vacancy)
    const { data } = await axios.post(`${process.env.VUE_APP_BASE_URL}${routes.vacanciesRoute}`, {
        title: vacancy.title,
        description: vacancy.description
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export async function updateVacancy(vacancy: any) {
    const token = getItemFromLocalStorage('signin').access_token
console.log(vacancy)
    const { data } = await axios.put(`${process.env.VUE_APP_BASE_URL}${routes.vacanciesRoute}/${vacancy.id}`, {
        title: vacancy.title,
        description: vacancy.description,
        isAvaiable: vacancy.isAvaiable
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}