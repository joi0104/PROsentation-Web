import React from 'react'
import classNames from 'classnames/bind'

import style from './State.scss'
import iconTestYet from 'assets/icons/icon-test-yet.png'
import iconTestDone from 'assets/icons/icon-test-done.png'

const cx = classNames.bind(style)

const State = ({ testOK }) => {
  return (
    <div className={cx('State')}>
      {testOK ? (
        <>
          <p>연결 완료</p>
          <img src={iconTestDone} alt="iconTestDone" />
        </>
      ) : (
        <>
          <p>연결 필요</p>
          <img src={iconTestYet} alt="iconTestYet" />
        </>
      )}
    </div>
  )
}

export default State
