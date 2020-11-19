import axios from 'axios'

axios.defaults.baseURL = 'http://prosentation.net:8080'

export const signupAPI = (form) => axios.post('/user/signup', form)

export const signinAPI = (form) => axios.post('/user/signin', form)

export const init = () => axios.get('/presentation/init')

export const getProfileAPI = () => axios.get('/user/info/profile')

export const uploadPPTAPI = (form) =>
  axios.post('/presentation/ppt', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const uploadVideoAPI = (form) => {
  axios.post('/presentation/video', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const getAnalysisAPI = (serviceId) =>
  axios.get('/presentation/result', {
    params: {
      service_id: serviceId,
    },
  })
