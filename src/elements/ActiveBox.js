import React from 'react'
import classNames from 'classnames/bind'

import style from './ActiveBox.scss'

const cx = classNames.bind(style)

const ActiveBox = ({ active, activeImg, inactiveImg }) => {
  return (
    <div className={cx('ActiveBox')}>
      {active ? (
        <img src={activeImg} alt="active" />
      ) : (
        <img src={inactiveImg} alt="inactive" />
      )}
    </div>
  )
}

export default ActiveBox
