import axios from 'axios'
import getaxios from './getaxios'

export function useAPI() {
  return getAPIURL()
}

const useAPI1 = axios.create({
  baseURL: getAPIURL(),
  timeout: 10000,
  responseType: 'json'
})

export function APIservice() {
  return {
    getaxios: getaxios(useAPI1)
  }
}
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
  let url
  let channelcode
  const devregex = /^dev-/g
  const qaregex = /^qa-/g

  let part1 = getDOMAIN()
  if (part1 === 'localhost' || part1 === '127') {
    channelcode = 'gogo2'
    url = `https://dev-api.3tez.com/ct/${channelcode}`
  } else if (devregex.test(part1)) {
    channelcode = 'gogo2'
    url = `https://dev-api.3tez.com/ct/${channelcode}`
  } else if (qaregex.test(part1)) {
    channelcode = 'gogo2'
    url = `https://dev-api.3tez.com/ct/${channelcode}`
  } else {
    channelcode = part1
    url = `https://api.3tez.com/ct/${channelcode}`
  }
  return url
}

// 3TEZ網站
export function TO_3TEZ_WEDSITE() {
  let website
  const devregex = /^dev-/g
  const qaregex = /^qa-/g

  let part1 = getDOMAIN()
  if (part1 === 'localhost' || part1 === '127') {
    website = 'https://dev-gogo2.3tez.com'
  } else if (devregex.test(part1)) {
    website = 'https://dev-gogo2.3tez.com'
  } else if (qaregex.test(part1)) {
    website = 'https://dev-gogo2.3tez.com'
  } else {
    website = 'https://gogo2.3tez.com'
  }
  return website
}
