import request from '@/utils/request'

export const getTemplateListByTemplateId = data => {
  return request({
    url: '/api/template/search',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: data
  })
}
