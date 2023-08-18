import request from '../request'

// 获取所有心情
export const getAll = () => {
  return request.get('/emotions')
}

// 获取一条心情
export const getOne = (id) => {
  return request.get(`/emotions/${id}`)
}

// 新增一条心情
export const postOne = (data) => {
  return request.post('/emotions', data)
}

// 修改一条心情
export const putOne = (id, data) => {
  return request.put(`/emotions/${id}`, data)
}
