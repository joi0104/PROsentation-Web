import React, { useState } from 'react'
import classNames from 'classnames/bind'

import style from './Preparation.scss'
import PreparationNavbar from 'components/service/preparation/PreparationNavbar.js'
import StartPreparation from 'components/service/preparation/startPreparation/StartPreparation.js'
import MicTest from 'components/service/preparation/micTest/MicTest.js'
import CamTest from 'components/service/preparation/camTest/CamTest.js'
import PPTUpload from 'components/service/preparation/pptUpload/PPTUpload.js'
import CompletePreparation from 'components/service/preparation/completePreparation/CompletePreparation.js'
import Banner from 'elements/Banner.js'

const cx = classNames.bind(style)

const Preparation = ({ setPreparationOK, serviceId, setPPT }) => {
  const [checkItemsOK, setCheckItemsOK] = useState(false)
  const [micTestOK, setMicTestOK] = useState(false)
  const [camTestOK, setCamTestOK] = useState(false)
  const [PPTUploadOK, setPPTUploadOK] = useState(false)

  return (
    <div className={cx('Preparation')}>
      <div className={cx('wrapper')}>
        <PreparationNavbar
          micTestOK={micTestOK}
          camTestOK={camTestOK}
          PPTUploadOK={PPTUploadOK}
        />
        <Banner>발표 준비하기</Banner>

        <div className={cx('content')}>
          {!checkItemsOK ? (
            <StartPreparation setCheckItemsOK={setCheckItemsOK} />
          ) : !micTestOK ? (
            <MicTest setMicTestOK={setMicTestOK} />
          ) : !camTestOK ? (
            <CamTest setCamTestOK={setCamTestOK} />
          ) : !PPTUploadOK ? (
            <PPTUpload
              setPPTUploadOK={setPPTUploadOK}
              setPPT={setPPT}
              serviceId={serviceId}
            />
          ) : (
            <CompletePreparation setPreparationOK={setPreparationOK} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Preparation
