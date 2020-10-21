import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'pages/Main.scss'
import PremiumNavbar from 'components/navbar/PremiumNavbar.js'
import iconArrow from 'assets/icons/icon-arrow.png'

const cx = classNames.bind(style)

const Main = ({ hasCookie }) => {
  return (
    <div className={cx('Main')}>
      <PremiumNavbar />
      <p className={cx('Main-title')}>나만을 위한 발표 솔루션, PROSENTATION</p>
      <p className={cx('Main-description')}>
        프로처럼 멋지게 발표하고 싶을 때는 프로젠테이션!
      </p>
      <p className={cx('Main-description')}>
        발표 동영상을 업로드하면 AI가 체계적으로 분석하여 피드백해드려요.
      </p>
      <p className={cx('Main-button-decsription')}>
        학생이라면? AI에게 무료로 발표 코칭 받기
      </p>
      <Link to="/service" className={cx('Main-button')}>
        발표 시작하기
        <img src={iconArrow} alt="icon-arrow" />
      </Link>
    </div>
  )
}

export default Main
