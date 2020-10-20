import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

import style from './Service.scss'
import Preparation from 'components/service/preparation/Preparation.js'
import Recording from 'components/service/recording/Recording.js'
import Result from 'components/service/result/Result.js'
import ErrorPopup from 'components/ErrorPopup.js'
import { init } from 'api/http.js'

const cx = classNames.bind(style)

const Service = () => {
  const [error, setError] = useState(null)
  const [serviceId, setServiceId] = useState()
  const [preparationOK, setPreparationOK] = useState(false)
  const [recordingOK, setRecordingOK] = useState(false)
  const [PPT, setPPT] = useState()
  const [video, setVideo] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        let res = await init()
        setServiceId(res.data.serviceId)
        alert(res.data.serviceId)
      } catch (error) {
        alert(JSON.stringify(error.response))
        setError(error)
      }
    })()
  }, [])

  return (
    <div className={cx('Service')}>
      {error ? <ErrorPopup error={error} /> : null}
      {!preparationOK ? (
        <Preparation
          serviceId={serviceId}
          setPreparationOK={setPreparationOK}
          setPPT={setPPT}
        />
      ) : !recordingOK ? (
        <Recording
          setRecordingOK={setRecordingOK}
          PPT={PPT}
          setVideo={setVideo}
        />
      ) : (
        <Result serviceId={serviceId} video={video} />
      )}
    </div>
  )
}

export default Service
