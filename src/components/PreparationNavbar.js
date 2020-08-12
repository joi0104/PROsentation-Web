import React from 'react';
import classNames from 'classnames/bind'

import style from 'components/PreparationNavbar.scss'

const cx = classNames.bind(style)

const PreparationNavbar = ({ process }) => {
    return (
        <div className={cx('PreparationNavbar')}>
            <h2>발표 준비하기</h2>
            <ul>
                <li>마이크 확인하기 {process.micTest? <span>O</span> : <span>X</span> }</li>
                <li>카메라 확인하기 {process.camTest? <span>O</span> : <span>X</span> }</li>
                <li>발표자료 올리기 {process.pptUpload? <span>O</span> : <span>X</span> }</li>
            </ul>
        </div>
    );
};

export default PreparationNavbar;