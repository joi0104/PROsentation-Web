import React, { useState, useEffect, useContext } from 'react'

import Loading from 'components/service/result/Loading.js'
import Analysis from 'components/service/result/Analysis.js'
import Matching from 'components/service/result/Matching.js'
import { uploadVideoAPI, getAnalysisAPI } from 'api/http.js'
import ErrorPopup from 'components/ErrorPopup.js'
import UserContext from 'contexts/user.js'

const Result = () => {
  const { state } = useContext(UserContext)
  const { serviceId, video } = state
  const [error, setError] = useState(null)
  const [resultOK, setResultOK] = useState(false)
  const [matchingOK, setMachingOK] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        //const form = new FormData()
        //form.append('media', new Blob(video, { type: 'video/webm' }))
        //form.append('serviceId', serviceId)
        //await uploadVideoAPI(form)
        //const tmp = await getAnalysisAPI(serviceId)
        //alert(JSON.stringify(tmp))
        setInterval(() => {
          setResultOK(true)
        }, 10000)
      } catch (error) {
        //setError(error)
      }
    })()
  }, [video, serviceId])

  return error ? (
    <ErrorPopup error={error} />
  ) : matchingOK ? (
    <Matching />
  ) : resultOK ? (
    <Analysis setMachingOK={setMachingOK} />
  ) : (
    <Loading />
  )
}

export default Result
