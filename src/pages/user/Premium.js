import React from 'react'
import classNames from 'classnames/bind'

import style from 'pages/user/Premium.scss'
import iconExpert from 'assets/icons/icon-user.png'

const cx = classNames.bind(style)

const Premium = () => {
  return (
    <div className={cx('Premium')}>
      <div className={cx('Premium-wrapper')}>
        <div className={cx('Premium-title')}>
          <img src={iconExpert} alt="icon-expert" />
          <p>업로드한 발표 동영상을</p>
          <p>전문가가 상세히 분석해줘요.</p>
        </div>
        <div className={cx('Premium-contents')}>
          <div className={cx('Premium-content')}>
            <div className={cx('Premium-content-col')}>
              <p className={cx('Premium-content-title')}>1회</p>
              <p className={cx('Premium-content-des')}>무제한 발표 연습</p>
              <p className={cx('Premium-content-des')}>1회 발표 전문가 분석</p>
            </div>
            <div className={cx('Premium-content-price-col')}>
              <p className={cx('Premium-content-title')}>10,000원</p>
              <p className={cx('Premium-content-des')}>회당 10,000원</p>
              <button className={cx('Premium-content-button')}>변경하기</button>
            </div>
          </div>
          <div className={cx('Premium-content')}>
            <div className={cx('Premium-content-col')}>
              <p className={cx('Premium-content-title')}>3회</p>
              <p className={cx('Premium-content-des')}>무제한 발표 연습</p>
              <p className={cx('Premium-content-des')}>3회 발표 전문가 분석</p>
            </div>
            <div className={cx('Premium-content-price-col')}>
              <p className={cx('Premium-content-title')}>27,000원</p>
              <p className={cx('Premium-content-des')}>회당 9,000원</p>
              <button className={cx('Premium-content-button')}>변경하기</button>
            </div>
          </div>
          <div className={cx('Premium-content')}>
            <div className={cx('Premium-content-col')}>
              <p className={cx('Premium-content-title')}>5회</p>
              <p className={cx('Premium-content-des')}>무제한 발표 연습</p>
              <p className={cx('Premium-content-des')}>5회 발표 전문가 분석</p>
            </div>
            <div className={cx('Premium-content-price-col')}>
              <p className={cx('Premium-content-title')}>42,500원</p>
              <p className={cx('Premium-content-des')}>회당 8,500원</p>
              <button className={cx('Premium-content-button')}>변경하기</button>
            </div>
          </div>
          <div className={cx('Premium-content')}>
            <div className={cx('Premium-content-col')}>
              <p className={cx('Premium-content-title')}>10회</p>
              <p className={cx('Premium-content-des')}>무제한 발표 연습</p>
              <p className={cx('Premium-content-des')}>10회 발표 전문가 분석</p>
            </div>
            <div className={cx('Premium-content-price-col')}>
              <p className={cx('Premium-content-title')}>80,000원</p>
              <p className={cx('Premium-content-des')}>회당 8,000원</p>
              <button className={cx('Premium-content-button')}>변경하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
