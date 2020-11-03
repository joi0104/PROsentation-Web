import React, { createContext, useState } from 'react'

const UserContext = createContext({
  state: {
    email: '',
    username: '',
    serviceId: '',
    PPT: '',
    video: '',
    time: '',
  },
  actions: {
    setEmail: () => {},
    setUsername: () => {},
    setServiceId: () => {},
    setPPT: () => {},
    setVideo: () => {},
    setTime: () => {},
  },
})

const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [serviceId, setServiceId] = useState('')
  const [PPT, setPPT] = useState('')
  const [video, setVideo] = useState('')
  const [time, setTime] = useState(0)

  const value = {
    state: { email, username, serviceId, PPT, video, time },
    actions: {
      setEmail,
      setUsername,
      setServiceId,
      setPPT,
      setVideo,
      setTime,
    },
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const { Consumer: UserConsumer } = UserContext

export { UserProvider, UserConsumer }

export default UserContext
