import { authRequest } from './auth.js'

const ping = () => {
  const extraParameters = {params: {"id": "PONG" }}
  return authRequest.get('/api/ping/',extraParameters)
    .then(response=>{
      return Promise.resolve(response.data)
    }).catch((error)=> {
      return Promise.reject(error)
    });
}

const list_todo = () => {
  return authRequest.get('/api/todo/')
    .then(response=>{
      return Promise.resolve(response.data)
    }).catch((error)=> {
      return Promise.reject(error)
    });
}

const add_todo = (params) => {
  const body = params;
  return authRequest.post('/api/todo/',body)
    .then(response=>{
      return Promise.resolve(response.data)
    }).catch((error)=> {
      return Promise.reject(error)
    });
}


export { ping, add_todo, list_todo }
