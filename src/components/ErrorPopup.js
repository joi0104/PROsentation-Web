import React from 'react'
import classNames from 'classnames'

import style from './ErrorPopup.scss'
import iconError from 'assets/icons/icon-error.png'

const cx = classNames.bind(style)

const ErrorPopup = ({ error }) => {
  return (
    <div className={cx('ErrorPopup')}>
      <div className={cx('ErrorPopup-wrapper')}>
        <div className={cx('ErrorPopup-contents')}>
          <div className={cx('title-wrapper')}>
            <img src={iconError} alt="icon-error" />
            <p className={cx('title-ko')}>미안해요! 에러가 났어요..</p>
            <p className={cx('title-eg')}>
              {error.response.data.status} {error.response.data.error}
            </p>
          </div>
          <div className={cx('des-wrapper')}>
            <p className={cx('des')}>새로고침 해보시겠어요?</p>
            <p className={cx('des')}>
              그래도 문제가 해결안되면 고객센터로 연락주세요.
            </p>
            <p className={cx('des')}>고객메일 : help@prosentation.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPopup
