import React from 'react';
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'components/PPTUpload.scss'

const cx = classNames.bind(style)

const PPTUpload = ({ process, setProcess}) => {
    const onClick = () => {
        setProcess({
            ...process,
            pptUpload: true
        })
    }
    return (
        <div className={cx('PPTUpload')}>
            피피티 업로드중..
            <button onClick={onClick}>완료하기</button>
            {process.pptUpload? <Link to="/recoding">다음</Link>:<Link>다음</Link>}
        </div>
    );
};

export default PPTUpload;