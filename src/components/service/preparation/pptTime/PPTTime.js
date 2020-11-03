import React, { useState, useContext } from 'react'
import classNames from 'classnames/bind'

import style from './PPTTime.scss'
import Button from 'elements/Button.js'
import Description from 'elements/Description.js'
import UserContext from 'contexts/user.js'

const cx = classNames.bind(style)

const PPTTime = ({ setPreparationOK }) => {
  const [testOK, setTestOK] = useState(false)
  const { actions } = useContext(UserContext)
  const setTime = actions.setTime

  const onClick = (e) => {
    setTime(e.target.value)
    setTestOK(true)
  }

  const goNext = () => {
    if (testOK) {
      setPreparationOK(true)
    } else {
      alert('발표 시간을 선택해주세요!')
    }
  }

  return (
    <div className={cx('PPTTime')}>
      <Description>발표 시간을 선택해주세요.</Description>
      <div className={cx('content-wrapper')}>
        <button value={5} onClick={onClick}>
          5분
        </button>
        <button value={10} onClick={onClick}>
          10분
        </button>
        <button value={15} onClick={onClick}>
          15분
        </button>
        <button value={20} onClick={onClick}>
          20분
        </button>
      </div>
      {testOK ? (
        <Button onClick={goNext}>다음</Button>
      ) : (
        <Button disabled={true}>다음</Button>
      )}
    </div>
  )
}

export default PPTTime
