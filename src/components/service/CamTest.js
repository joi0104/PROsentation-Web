import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import style from "components/service/CamTest.scss";
import { useRef } from "react";

const cx = classNames.bind(style);

const CamTest = ({ setIsCamTest }) => {
  const [testOK, setTestOK] = useState(false);
  const video = useRef();
  const msg = useRef();
  const constraints = (window.constraints = {
    audio: false,
    video: true,
  });

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        handleSuccess(stream);
      })
      .catch((err) => {
        handleError(err);
      });
  });

  const handleSuccess = (stream) => {
    video.current.srcObject = stream;
    video.current.onloadedmetadata = (e) => {
      video.current.play();
      setTestOK(true);
      handleMsg("연결 성공!");
    };
  };

  const handleError = (err) => {
    if (err.name === "ConstraintNotSatisfiedError") {
      handleMsg(
        `${constraints.video.width.exact}x${constraints.video.height.exact}크기의 카메라를 지원하지 않아요 ㅠㅠ`
      );
    } else if (err.name === "PermissionDeniedError") {
      handleMsg("카메라 요청을 허가해주세요!");
    } else {
      handleMsg(`에러 발생!${err.name}`);
    }
  };

  const handleMsg = (msgStr) => {
    msg.current.text = msgStr;
  };

  const goNext = () => {
    if (testOK) {
      setIsCamTest(true);
    } else {
      alert("카메라 테스트를 완료해주세요!");
    }
  };

  return (
    <div className={cx("CamTest")}>
      <video ref={video} autoPlay playsInline></video>
      <p ref={msg}>카메라 테스트를 시작해주세요.</p>
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default CamTest;
