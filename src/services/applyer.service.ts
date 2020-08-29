import axios from 'axios'
import routes from '../services/routes.enum'
import { getItemFromLocalStorage } from './local-storage.service'

export async function hireApplyer(applyer: any) {
    const token = getItemFromLocalStorage('signin').access_token

    const config: any = {
        method: 'post',
        url: `${process.env.VUE_APP_BASE_URL}${routes.applyersHire}/${applyer.id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const { data } = await axios(config)
    console.log(data)
    if (typeof data === 'object' && data.isHired)
    applyer.isHired = true
    
    return data
}

export async function fireApplyer(applyer: any) {
    const token = getItemFromLocalStorage('signin').access_token
    
    const config: any = {
        method: 'post',
        url: `${process.env.VUE_APP_BASE_URL}${routes.applyersFire}/${applyer.id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const { data } = await axios(config)
    if (typeof data === 'object' && !data.isHired)
        applyer.isHired = false

    return data
}