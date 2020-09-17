import React from 'react'
import classNames from 'classnames/bind'

import style from './ItemBox.scss'

const cx = classNames.bind(style)

const ItemBox = ({ text, imgSrc }) => {
  return (
    <div className={cx('ItemBox')}>
      <img src={imgSrc} alt={text} />
      <p>{text}</p>
    </div>
  )
}

export default ItemBox
