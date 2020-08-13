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
            나의 발표를 연습하고 피드백 받아보세요!
            <button onClick={onClick}>발표 시작하기</button>
        </div>
    );
}

export default Main;