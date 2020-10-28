import React from 'react'
import classNames from 'classnames/bind'

import style from './Summary.scss'
import iconUser from 'assets/icons/icon-user.png'
import iconSpeed from 'assets/icons/icon-speed.png'
import iconPronunciation from 'assets/icons/icon-pronunciation.png'
import iconEmotion from 'assets/icons/icon-emotion.png'
import iconDependency from 'assets/icons/icon-dependency.png'

const cx = classNames.bind(style)

const Summary = () => {
  return (
    <div className={cx('Summary')}>
      <img src={iconUser} alt="icon-user" />
      <div className={cx('rating')}>
        <p className={cx('title')}>발표 종합 평가</p>
        <p className={cx('content')}>A 우수</p>
      </div>
      <div className={cx('line')} />
      <div className={cx('score')}>
        <p className={cx('title')}>발표 종합 점수</p>
        <p className={cx('content')}>83점</p>
      </div>
      <div className={cx('line')} />
      <div className={cx('feature-rating')}>
        <img src={iconSpeed} alt="icon-speed" />
        <p className={cx('speed')}>속도가 적당해요</p>
      </div>
      <div className={cx('feature-rating')}>
        <img src={iconPronunciation} alt="icon-pronunciation" />
        <p className={cx('amount')}>발음이 좋아요</p>
      </div>
      <div className={cx('feature-rating')}>
        <img src={iconEmotion} alt="icon-emotion" />
        <p className={cx('emotion')}>표정이 좋아요</p>
      </div>
      <div className={cx('feature-rating')}>
        <img src={iconDependency} alt="icon-dependency" />
        <p className={cx('dependency')}>유사도가 적당해요</p>
      </div>
    </div>
  )
}

export default Summary
