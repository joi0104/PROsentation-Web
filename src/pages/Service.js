import React, { useState, useEffect, useContext } from 'react'
import classNames from 'classnames/bind'

import style from './Service.scss'
import Preparation from 'components/service/preparation/Preparation.js'
import Record from 'components/service/record/Record.js'
import Result from 'components/service/result/Result.js'
import ErrorPopup from 'components/ErrorPopup.js'
import { init } from 'api/http.js'
import UserContext from 'contexts/user.js'

const cx = classNames.bind(style)

const Service = () => {
  const { actions } = useContext(UserContext)
  const setServiceId = actions.setServiceId
  const [error, setError] = useState(null)
  const [preparationOK, setPreparationOK] = useState(false)
  const [recordOK, setRecordOK] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await init()
        setServiceId(res.data.serviceId)
        alert(res.data.serviceId)
      } catch (error) {
        setError(error)
      }
    })()
  }, [setServiceId])

  return (
    <div className={cx('Service')}>
      {error ? <ErrorPopup error={error} /> : null}
      {!preparationOK ? (
        <Preparation setPreparationOK={setPreparationOK} />
      ) : !recordOK ? (
        <Record setRecordOK={setRecordOK} />
      ) : (
        <Result />
      )}
    </div>
  )
}

export default Service
