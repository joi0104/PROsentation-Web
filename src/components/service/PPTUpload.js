import React from 'react';
import classNames from 'classnames/bind'

import style from 'components/service/PPTUpload.scss'

const cx = classNames.bind(style)

const PPTUpload = ({ setIsPPTUpload }) => {
    const onClick = () => {
        setIsPPTUpload(true)
    }
    return (
        <div className={cx('PPTUpload')}>
            피피티 업로드중..
            <button onClick={onClick}>완료하기</button>
        </div>
    );
};

export default PPTUpload;