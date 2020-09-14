import React from "react"
import classNames from "classnames/bind"

import style from "./CompletePreparation.scss"

const cx = classNames.bind(style)

const CompletePreparation = ({ setPreparationOK }) => {
  const goNext = () => {
    setPreparationOK(true)
  }

  return (
    <div className={cx("CompletePreparation")}>
      <p>모든 준비가 완료되었습니다!</p>
      <p>발표 촬영을 시작할까요?</p>
      <button onClick={goNext}>시작</button>
    </div>
  )
}

export default CompletePreparation
