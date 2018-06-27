import request from 'superagent'

export function getTime() {
  return request
  .get('/api/v1/time')
  .then(res => {
    console.log(res.body)
    return res.body
  })
  .catch(err => {
    console.error(err)
  })
}