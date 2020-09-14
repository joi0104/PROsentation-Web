import React from 'react'
import classNames from 'classnames/bind'

import style from './PreparationNavbar.scss'
import ActiveBox from 'elements/ActiveBox.js'

const cx = classNames.bind(style)

const PreparationNavbar = ({ micTestOK, camTestOK, PPTUploadOK }) => {
    return (
        <div className={cx('PreparationNavbar')}>
            <ActiveBox active={micTestOK} />
            <ActiveBox active={camTestOK} />
            <ActiveBox active={PPTUploadOK} />
        </div>
    )
}

export default PreparationNavbar