import React from "react"
import classNames from "classnames/bind"

import style from "./Recoding.scss"
import RecodingVideo from "components/service/recoding/RecodingVideo.js"

const cx = classNames.bind(style)

const Recoding = ({ setRecodingOK }) => {
  const goNext = () => {
    setRecodingOK(true)
  }

  return (
    <div className={cx("Recoding")}>
      <RecodingVideo />
      <button onClick={goNext}>완료</button>
    </div>
  )
}

export default Recoding
