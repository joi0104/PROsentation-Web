import React, { useState, useEffect } from 'react'

import Loading from 'components/service/result/Loading.js'
import Analysis from 'components/service/result/Analysis.js'
import { uploadVideoAPI } from 'api/http.js'
import ErrorPopup from 'components/ErrorPopup.js'

const Result = ({ serviceId, video }) => {
  const [error, setError] = useState(null)
  const [resultOK, setResultOK] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const form = new FormData()
        form.append('media', video)
        form.append('serviceId', serviceId)
        await uploadVideoAPI(form)
        setResultOK(true)
      } catch (error) {
        setError(error)
      }
    })()
  }, [video, serviceId])

  return error ? (
    <ErrorPopup error={error} />
  ) : resultOK ? (
    <Analysis />
  ) : (
    <Loading />
  )
}

export default Result
