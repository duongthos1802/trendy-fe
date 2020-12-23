import axios from 'axios'

const configHeader = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Allow-Headers'
}

export const apiService = () => {
  return axios.create({
    baseURL: 'https://api.nguyenlieutrendy.com',
    headers: configHeader,
    timeout: 99999
  })
}
