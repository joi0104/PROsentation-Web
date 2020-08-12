import React from 'react'
import classNames from 'classnames/bind'

import style from 'pages/Main.scss'

const cx = classNames.bind(style)

const Main = () => {
    return (
        <div className={cx('Main')}>
            나의 발표를 연습하고 피드백 받아보세요!
            {hasCookie?<Link to="/preparation">발표 시작하기</Link>: <Link to="/login">발표 시작하기</Link>}
        </div>
    );
}

export default Main;