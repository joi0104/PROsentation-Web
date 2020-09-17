import React, { useState } from 'react'
import classNames from 'classnames/bind'

import style from './Service.scss'
import Preparation from 'components/service/preparation/Preparation.js'
import Recoding from 'components/service/recoding/Recoding.js'
import Result from 'components/service/result/Result.js'

const cx = classNames.bind(style)

const Service = () => {
  const [preparationOK, setPreparationOK] = useState(false)
  const [recodingOK, setRecodingOK] = useState(false)
  const [resultOK, setResultOK] = useState(false)

  return (
    <div className={cx('Service')}>
      {!preparationOK ? (
        <Preparation setPreparationOK={setPreparationOK} />
      ) : !recodingOK ? (
        <Recoding setRecodingOK={setRecodingOK} />
      ) : !resultOK ? (
        <Result setResultOK={setResultOK} />
      ) : (
        <>모두완료!</>
      )}
    </div>
  )
}

export default Service
