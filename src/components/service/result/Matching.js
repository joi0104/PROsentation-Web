import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from './Matching.scss'
import iconUserGreen from 'assets/icons/icon-user-green.png'
import Button from 'elements/Button.js'
import logoGray from 'assets/images/logo-gray.png'

const cx = classNames.bind(style)

const Matching = () => {
  return (
    <div className={cx('Matching')}>
      <div className={cx('Matching-wrapper')}>
        <div className={cx('Matching-content')}>
          <div className={cx('Matching-des')}>
            <img src={iconUserGreen} alt="icon-user-green" />
            <p>김정아 전문가님께 발표 영상을 전송해드렸어요.</p>
            <p>전문가님의 피드백이 메일로 전송될 예정이에요.</p>
          </div>
          <Link className={cx('go-to')} to="/">
            <Button>메인으로 돌아가기</Button>
          </Link>
          <div className={cx('line')} />
          <img src={logoGray} alt="logo-gray" />
        </div>
      </div>
    </div>
  )
}

export default Matching
