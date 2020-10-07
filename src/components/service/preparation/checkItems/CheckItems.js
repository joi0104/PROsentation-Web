import React from 'react'
import classNames from 'classnames/bind'

import style from './CheckItems.scss'
import iconCheckroundInactive from 'assets/icons/icon-checkround.png'
import iconCheckroundActive from 'assets/icons/icon-checkround-green.png'
import iconPPTadd from 'assets/icons/icon-pptadd-green.png'
import iconMic from 'assets/icons/icon-mic-green.png'
import iconCam from 'assets/icons/icon-cam-green.png'

const cx = classNames.bind(style)

const CheckItems = ({ PPTuploadOK, micTestOK, camTestOK }) => {
  return (
    <div className={cx('CheckItems')}>
      <div className={cx('PPTupload')}>
        {PPTuploadOK ? (
          <img src={iconCheckroundActive} alt="active" />
        ) : (
          <img src={iconCheckroundInactive} alt="inactive" />
        )}
        <div>
          <img src={iconPPTadd} alt="pptadd" />
        </div>
        <p>발표자료 업로드</p>
      </div>
      <div className={cx('micTest')}>
        {micTestOK ? (
          <img src={iconCheckroundActive} alt="active" />
        ) : (
          <img src={iconCheckroundInactive} alt="inactive" />
        )}
        <div>
          <img src={iconMic} alt="mic" />
        </div>
        <p>마이크 연결</p>
      </div>
      <div className={cx('camTest')}>
        {camTestOK ? (
          <img src={iconCheckroundActive} alt="active" />
        ) : (
          <img src={iconCheckroundInactive} alt="inactive" />
        )}
        <div>
          <img src={iconCam} alt="cam" />
        </div>
        <p>웹캠 연결</p>
      </div>
    </div>
  )
}

export default CheckItems
