import React from 'react';
import classNames from 'classnames/bind'

import style from 'components/service/MicTest.scss'

const cx = classNames.bind(style)

const MicTest = ({ setIsMicTest }) => {
    const onClick = () => {
        setIsMicTest(true)
    }
    return (
        <div className={cx('MicTest')}>
            마이크 테스트...
            <button onClick={onClick}>다음</button>
        </div>
    );
};

export default MicTest;