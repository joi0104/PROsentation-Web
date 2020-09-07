import React from "react";
import classNames from "classnames/bind";
import { useHistory } from "react-router-dom";

import style from "components/service/CompletePreparation.scss";

const cx = classNames.bind(style);

const CompletePreparation = () => {
  let history = useHistory();

  function goNext() {
    history.push("recoding");
  }

  return (
    <div className={cx("CompletePreparation")}>
      <p>모든 준비가 완료되었습니다!</p>
      <p>발표 촬영을 시작할까요?</p>
      <button onClick={goNext}>시작</button>
    </div>
  );
};

export default CompletePreparation;
