import React from 'react'
import classNames from 'classnames/bind'

import style from 'pages/user/MyInfo.scss'

const cx = classNames.bind(style)

const MyInfo = () => {
  return <div className={cx('MyInfo')}>나의 정보</div>
}

export default MyInfo
