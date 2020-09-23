import axios from 'axios'

axios.defaults.baseURL = 'http://test-server.team-jyb.com:8080'

export const signupAPI = (form) => axios.post('/user/signup', form)

export const signinAPI = (form) => axios.post('/user/signin', form)

export const init = () => axios.get('/presentation/init')
