import React, { createContext, useState } from 'react'

const AmountContext = createContext({
  state: {
    amount: {},
  },
  actions: {
    addAmount: () => {},
    addLastAmount: () => {},
  },
})

const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState({})

  const addAmount = (pageNumber, counter) => {
    const page = pageNumber.toString()
    if (counter) {
      setAmount((preAmount) => ({
        ...preAmount,
        [page]: counter,
      }))
    }
  }

  const addLastAmount = (counter) => {
    const pageNumber = Object.keys(amount).length + 1
    const page = pageNumber.toString()
    setAmount((preAmount) => ({
      ...preAmount,
      [page]: counter,
    }))
  }

  const value = {
    state: { amount },
    actions: { addAmount, addLastAmount },
  }

  return (
    <AmountContext.Provider value={value}>{children}</AmountContext.Provider>
  )
}

const { Consumer: AmountConsumer } = AmountContext

export { AmountProvider, AmountConsumer }

export default AmountContext
