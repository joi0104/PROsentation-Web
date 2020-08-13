import React from 'react';
import classNames from 'classnames/bind'

import style from 'pages/service/Result.scss'

const cx = classNames.bind(style)

const Result = () => {
    return (
        <div className={cx('Result')}>
            분석결과
        </div>
    );
};

export default Result;