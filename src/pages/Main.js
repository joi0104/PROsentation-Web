import React from 'react'
import classNames from 'classnames/bind'

import style from 'pages/Main.scss'

const cx = classNames.bind(style)

const Main = () => {
    return (
        <div className={cx('Main')}>
            메인페이지
        </div>
    );
}

export default Main;