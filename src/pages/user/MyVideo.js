import React from 'react';
import classNames from 'classnames/bind'

import style from 'pages/user/MyVideo.scss'

const cx = classNames.bind(style)

const MyVideo = () => {
    return (
        <div className={cx('MyVideo')}>
            발표영상 목록
        </div>
    );
};

export default MyVideo;