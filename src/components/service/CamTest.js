import React, { useEffect } from "react"
import classNames from "classnames/bind"

import style from "components/service/CamTest.scss"

const cx = classNames.bind(style)

const CamTest = ({ setIsCamTest }) => {
  const constraints = (window.constraints = {
    audio: false,
    video: true,
  })

  useEffect(() => {
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      handleSuccess(stream)
    })
    .catch(error => {
      handleError(error)
    })
  }, )

  function handleSuccess(stream) {
    const video = document.querySelector('video')
    video.srcObject = stream
    video.onloadedmetadata = function(e) {
      video.play()
      handleMsg('연결 성공!')
    };
  }
  
  function handleError(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      handleMsg(`${constraints.video.width.exact}x${constraints.video.height.exact}크기의 카메라를 지원하지 않아요 ㅠㅠ`)
    } else if (error.name === 'PermissionDeniedError') {
      handleMsg('카메라 요청을 허가해주세요!')
    } else {
      handleMsg(`에러 발생!${error.name}`)
    }
  }

  function handleMsg(msg) {
    const msgElement = document.querySelector('#msg')
    msgElement.innerHTML = `<p>${msg}</p>`
  }

  function goNext() {
    setIsCamTest(true)
  }

  return (
    <div className={cx("CamTest")}>
    <video autoPlay playsInline></video>
    <p id="msg">카메라 테스트를 시작해주세요.</p>
    <button onClick={goNext}>다음</button>
    </div>
  )
}

export default CamTest
