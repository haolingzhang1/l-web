import request from '@/utils/request'

export function sendMail(data) {
  return request({
    url: '/api/mail/sendMail',
    method: 'post',
    data: data
  })
}