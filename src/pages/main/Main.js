import React from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'pages/main/Main.scss'

const cx = classNames.bind(style)

const Main = ({ hasCookie }) => {
    let history = useHistory();

    const onClick = () => {
        history.push(hasCookie? '/service/preparation' : '/signin')
    }

    return (
        <div className={cx('Main')}>
            <h2>나만을 위한 발표 솔루션, PROSENTATION</h2>
            <p>성공적으로 발표하고 싶을 때는 PROSENTATION</p>
            <p>발표 동영상을 업로드하면 전문 AI가 분석하여 피드백 해줄께요.</p>
            <button onClick={onClick}>발표 시작하기</button>
        </div>
    );
}

export default Main;