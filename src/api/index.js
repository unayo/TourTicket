// fake api
import axios from 'axios'
// import getaxios from './getaxios'

export function useAPI() {
  return getAPIURL()
}

const useAPI1 = axios.create({
  baseURL: getAPIURL(),
  timeout: 10000,
  responseType: 'json'
})

// export function APIservice() {
//   return {
//     getaxios: getaxios(useAPI1)
//   }
// }

// interceptors
useAPI1.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
// domain
export function getDOMAIN() {
  const domain = new URL(window.location.href || document.location.href).hostname
  let part1 = domain.split('.')[0]
  return part1
}
// api 路徑
export function getAPIURL() {
  return ''
}