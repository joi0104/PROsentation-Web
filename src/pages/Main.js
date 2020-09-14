import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'pages/Main.scss'

const cx = classNames.bind(style)

const Main = ({ hasCookie }) => {
    return (
        <div className={cx('Main')}>
            <h2>나만을 위한 발표 솔루션, PROSENTATION</h2>
            <p>성공적으로 발표하고 싶을 때는 PROSENTATION</p>
            <p>발표 동영상을 업로드하면 전문 AI가 분석하여 피드백 해줄께요.</p>
            <Link to={hasCookie? '/service' : '/signin'}>발표 시작하기</Link>
        </div>
    )
}

export default Main