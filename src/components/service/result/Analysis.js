import React, { useContext } from 'react'
import classNames from 'classnames/bind'

import style from './Analysis.scss'
import AmountContext from 'contexts/amount.js'

const cx = classNames.bind(style)

const Analysis = () => {
  const { state } = useContext(AmountContext)
  return <div className={cx('Analysis')}>{JSON.stringify(state.amount)}</div>
}

export default Analysis
