import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";

import SoundMeter from "utils/SoundMeter.js";
import style from "components/service/MicTest.scss";

const cx = classNames.bind(style);

const MicTest = ({ setIsMicTest }) => {
  const [testOK, setTestOK] = useState(false);
  const msg = useRef(null);
  const constraints = (window.constraints = {
    audio: true,
    video: false,
  });

  useEffect(() => {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      window.audioContext = new AudioContext();
    } catch (e) {
      handleMsg("API 를 지원하지 않는 브라우저 입니다");
    }
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError);
  }, []);

  const handleSuccess = (stream) => {
    window.stream = stream;
    const soundMeter = (window.soundMeter = new SoundMeter(
      window.audioContext
    ));
    const instantMeter = document.querySelector("meter");
    let meterRefresh = null;
    soundMeter.connectToSource(stream, () => {
      meterRefresh = setInterval(() => {
        instantMeter.value = soundMeter.instant.toFixed(2);
        if (instantMeter.value >= instantMeter.high) {
          setTestOK(true);
          handleMsg("연결 완료!");
        }
      }, 200);
    });
  };

  const handleError = (err) => {
    if (err.name === "PermissionDeniedError") {
      handleMsg("마이크 요청을 허가해주세요!");
    } else {
      handleMsg(`에러 발생!${err.name}`);
    }
  };

  const handleMsg = (msgStr) => {
    msg.current.text = msgStr;
  };

  const goNext = () => {
    if (testOK) {
      setIsMicTest(true);
    } else {
      alert("마이크 테스트를 완료해주세요!");
    }
  };

  return (
    <div className={cx("MicTest")}>
      <meter high="0.1" max="0.5" value="0"></meter>
      <p ref={msg}>마이크 테스트를 시작해주세요.</p>
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default MicTest;
