import React from 'react'
import classNames from 'classnames/bind'
import { Link } from "react-router-dom"

import style from 'pages/Main.scss'

const cx = classNames.bind(style)

function Main() {
    return (
        <div className={cx('Main')}>
            메인페이지
        </div>
    );
}

export default Main;