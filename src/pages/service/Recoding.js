import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "pages/service/Recoding.scss";
import RecodingPPT from "components/service/RecodingPPT.js";
import RecodingVideo from "components/service/RecodingVideo.js";

const cx = classNames.bind(style);

const Recoding = () => {
  return (
    <div className={cx("Recoding")}>
      <RecodingPPT />
      <RecodingVideo />
      <Link to="/result">완료</Link>
    </div>
  );
};

export default Recoding;
