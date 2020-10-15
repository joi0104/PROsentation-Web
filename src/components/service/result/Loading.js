import React from 'react'
import classNames from 'classnames/bind'
import Lottie from 'react-lottie'

import style from './Loading.scss'
import Banner from 'elements/Banner.js'
import LoadingAnimation from 'assets/images/loading1.json'

const lottieOptions = {
  animationData: LoadingAnimation,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'add-class',
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const cx = classNames.bind(style)

const Loading = () => {
  return (
    <div className={cx('Loading')}>
      <div className={cx('Loading-wrapper')}>
        <Banner>발표 영상 분석 중</Banner>
        <div className={cx('description')}>
          <p>수고하셨어요! 잠시만 기다려주세요!</p>
          <div className={cx('animation')}>
            <p>현재 발표 영상을 분석 중이에요!</p>
            <Lottie
              style={{ width: '80px', height: 'auto' }}
              options={lottieOptions}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
