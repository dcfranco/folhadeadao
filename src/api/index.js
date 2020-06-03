import axios from 'axios'
import { ApiUrl } from 'configs'

export default axios.create({
  baseURL: `${ApiUrl}`,
})