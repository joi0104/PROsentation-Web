import React from 'react';
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'components/MicTest.scss'

const cx = classNames.bind(style)

const MicTest = ({ process, setProcess }) => {
    const onClick = () => {
        setProcess({
            ...process,
            micTest: true
        })
    }
    return (
        <div className={cx('MicTest')}>
            마이크 테스트...
            <button onClick={onClick}>완료하기</button>
            {process.micTest?<Link to="/preparation/camtest">다음</Link>: <Link>다음</Link>}
        </div>
    );
};

export default MicTest;