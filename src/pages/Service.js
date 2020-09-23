import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

import style from './Service.scss'
import Preparation from 'components/service/preparation/Preparation.js'
import Recoding from 'components/service/recoding/Recoding.js'
import Result from 'components/service/result/Result.js'
import { init } from 'api/http.js'

const cx = classNames.bind(style)

const Service = () => {
  const [serviceId, setServiceId] = useState()
  const [preparationOK, setPreparationOK] = useState(false)
  const [recodingOK, setRecodingOK] = useState(false)
  const [resultOK, setResultOK] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        let res = await init()
        setServiceId(res.data.serviceId)
        alert(res.data.serviceId)
      } catch {
        console.log('실패!')
      }
    })()
  }, [])

  return (
    <div className={cx('Service')}>
      {!preparationOK ? (
        <Preparation
          setPreparationOK={setPreparationOK}
          serviceId={serviceId}
        />
      ) : !recodingOK ? (
        <Recoding setRecodingOK={setRecodingOK} serviceId={serviceId} />
      ) : !resultOK ? (
        <Result setResultOK={setResultOK} serviceId={serviceId} />
      ) : (
        <>모두완료!</>
      )}
    </div>
  )
}

export default Service
