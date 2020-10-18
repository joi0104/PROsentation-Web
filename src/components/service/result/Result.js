import React, { useState, useEffect } from 'react'

import Loading from 'components/service/result/Loading.js'
import Analysis from 'components/service/result/Analysis.js'
import { uploadVideoAPI } from 'api/http.js'

const Result = ({ serviceId, video }) => {
  const [resultOK, setResultOK] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const form = new FormData()
        form.append('media', video)
        form.append('serviceId', serviceId)
        await uploadVideoAPI(form)
        setResultOK(true)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return resultOK ? <Analysis /> : <Loading />
}

export default Result
