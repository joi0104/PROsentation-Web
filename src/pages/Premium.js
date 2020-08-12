import React from 'react';
import classNames from 'classnames/bind'

import style from 'pages/Premium.scss'

const cx = classNames.bind(style)

const Premium = () => {
    return (
        <div className={cx('Premium')}>
            프리미엄 서비스
        </div>
    );
};

export default Premium;