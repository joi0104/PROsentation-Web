import React from 'react'
import classNames from 'classnames/bind'

import style from 'components/service/CamTest.scss'

const cx = classNames.bind(style)

const CamTest = ({ setIsCamTest }) => {

    const onClick = () => {
        setIsCamTest(true)
    }
    
    return (
        <div className={cx('CamTest')}>
            카메라 테스트중..
            <button onClick={onClick}>다음</button>
            <video id="localVideo" />
        </div>
    );
};

export default CamTest;