import React from 'react'
import classNames from 'classnames/bind'

import style from './PreparationNavbar.scss'
import ActiveBox from 'elements/ActiveBox.js'
import iconMicInactive from 'assets/icons/icon-mic.png'
import iconMicActive from 'assets/icons/icon-mic-green.png'
import iconPPTaddInactive from 'assets/icons/icon-pptadd.png'
import iconPPTaddActive from 'assets/icons/icon-pptadd-green.png'
import iconCamInactive from 'assets/icons/icon-cam.png'
import iconCamActive from 'assets/icons/icon-cam-green.png'

const cx = classNames.bind(style)

const PreparationNavbar = ({ micTestOK, camTestOK, PPTUploadOK }) => {
  return (
    <div className={cx('PreparationNavbar')}>
      <ActiveBox
        active={PPTUploadOK}
        activeImg={iconPPTaddActive}
        inactiveImg={iconPPTaddInactive}
      />
      <div className={cx('pptadd-mic-bar')} />
      <ActiveBox
        active={micTestOK}
        activeImg={iconMicActive}
        inactiveImg={iconMicInactive}
      />
      <div className={cx('mic-cam-bar')} />
      <ActiveBox
        active={camTestOK}
        activeImg={iconCamActive}
        inactiveImg={iconCamInactive}
      />
    </div>
  )
}

export default PreparationNavbar
