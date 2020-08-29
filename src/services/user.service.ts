import axios from 'axios'
import routes from '../services/routes.enum'
import { getItemFromLocalStorage } from './local-storage.service'

export async function getCurriculum() {
    try {
        const token = getItemFromLocalStorage('signin').access_token

        const response = await axios.get(`${process.env.VUE_APP_BASE_URL}${routes.usersRoute}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            responseType: 'blob'
        })

        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        const fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'file.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
    } catch (error) {
        alert('Curriculum not found')
    }
}