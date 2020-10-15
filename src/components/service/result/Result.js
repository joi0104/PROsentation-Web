import React, { useState } from 'react'

import Loading from 'components/service/result/Loading.js'
import Analysis from 'components/service/result/Analysis.js'

const Result = ({ serviceId, video }) => {
  const [resultOK, setResultOK] = useState(false)

  return resultOK ? <Analysis /> : <Loading />
}

export default Result
