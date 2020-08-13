import React from 'react';
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'pages/service/Recoding.scss'

const cx = classNames.bind(style)

const Recoding = () => {
    return (
        <div className={cx('Recoding')}>
            발표영상 촬영
            <Link to="/result">완료</Link>
        </div>
    );
};

export default Recoding;