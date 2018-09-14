import axios from 'axios'
import convertKeys from 'convert-keys'

const { apiBase } = process.env.CONFIG

// リクエストとレスポンスの共通処理を設定
const http = axios.create({
  baseURL: apiBase,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  }
})

// リクエスト処理を共通化
http.interceptors.request.use(config => {
  config.data = convertKeys.toSnake(config.data)
  return config
})

// レスポンス処理を共通化
http.interceptors.response.use(response => {
  return convertKeys.toCamel(response)
})

export const apiSample = data =>
  http({
    method: 'get',
    url: '/users/octocat/orgs',
    data
  })

export default http
