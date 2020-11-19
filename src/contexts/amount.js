import React, { createContext, useState } from 'react'

const AmountContext = createContext({
  state: {
    amount: {},
    totalAmount: 0,
    time: 0,
  },
  actions: {
    addAmount: () => {},
    addLastAmount: () => {},
    setTime: () => {},
  },
})

const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState({})
  const [time, setTime] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const addAmount = (pageNumber, counter) => {
    const page = pageNumber.toString()
    if (counter) {
      setAmount((preAmount) => ({
        ...preAmount,
        [page]: counter,
      }))
      setTotalAmount((preAmount) => preAmount + counter)
    }
  }

  const addLastAmount = (counter) => {
    const pageNumber = Object.keys(amount).length + 1
    const page = pageNumber.toString()
    setAmount((preAmount) => ({
      ...preAmount,
      [page]: counter,
    }))
    setTotalAmount((preAmount) => preAmount + counter)
  }

  const value = {
    state: { amount, time, totalAmount },
    actions: { addAmount, addLastAmount, setTime },
  }

  return (
    <AmountContext.Provider value={value}>{children}</AmountContext.Provider>
  )
}

const { Consumer: AmountConsumer } = AmountContext

export { AmountProvider, AmountConsumer }

export default AmountContext
