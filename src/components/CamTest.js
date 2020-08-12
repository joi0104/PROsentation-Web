import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'components/CamTest.scss'

const cx = classNames.bind(style)

const CamTest = ({ process ,setProcess }) => {
    const onClick = () => {
        setProcess({
            ...process,
            camTest: true
        })
    }
    return (
        <div classNames={cx('CamTest')}>
            카메라 테스트중..
            <button onClick={onClick}>완료하기</button>
            {process.camTest?<Link to="/preparation/pptupload">다음</Link>:<Link>다음</Link>}
        </div>
    );
};

export default CamTest;