import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from './PremiumNavbar.scss'

const cx = classNames.bind(style)

const PremiumNavbar = () => {
  return (
    <div className={cx('PremiumNavbar')}>
      <p>나만을 위한 발표 솔루션의 PREMIUM을 구독해보세요!</p>
      <Link
        to="/user/premium"
        style={{ textDecoration: 'none' }}
        className={cx('PremiumNavbar-button-link')}
      >
        프리미엄 구독하러가기
      </Link>
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
        className={cx('PremiumNavbar-button-anymore')}
      >
        다시 보지않기
      </Link>
    </div>
  )
}

export default PremiumNavbar
