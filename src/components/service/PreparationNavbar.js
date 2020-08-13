import React from 'react';
import classNames from 'classnames/bind'

import style from 'components/service/PreparationNavbar.scss'

const cx = classNames.bind(style)

const PreparationNavbar = ({ isMicTest, isCamTest, isPPTUpload }) => {
    return (
        <div className={cx('PreparationNavbar')}>
            <h2>발표 준비하기</h2>
            <ul>
                <li>마이크 확인하기 {isMicTest? <span>O</span> : <span>X</span> }</li>
                <li>카메라 확인하기 {isCamTest? <span>O</span> : <span>X</span> }</li>
                <li>발표자료 올리기 {isPPTUpload? <span>O</span> : <span>X</span> }</li>
            </ul>
        </div>
    );
};

export default PreparationNavbar;