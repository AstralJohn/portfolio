import axios from 'axios'
import { FormData } from 'views/Contact'

const api = axios.create({
  baseURL: 'https://johndinh.tech/api/portfolio'
})

class API {
  static async sendMessage(formData: FormData) {
    const test = await api.post('/message', { data: formData })
    return test
  }
}

export default API
