import React, { createContext, useState } from 'react'

const UserContext = createContext({
  state: {
    email: '',
    username: '',
    serviceId: '',
    PPT: '',
    video: '',
  },
  actions: {
    setEmail: () => {},
    setUsername: () => {},
    setServiceId: () => {},
    setPPT: () => {},
    setVideo: () => {},
  },
})

const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [serviceId, setServiceId] = useState('')
  const [PPT, setPPT] = useState('')
  const [video, setVideo] = useState('')

  const value = {
    state: { email, username, serviceId, PPT, video },
    actions: {
      setEmail,
      setUsername,
      setServiceId,
      setPPT,
      setVideo,
    },
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const { Consumer: UserConsumer } = UserContext

export { UserProvider, UserConsumer }

export default UserContext
