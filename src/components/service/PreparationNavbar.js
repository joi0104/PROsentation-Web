import React from 'react';
import classNames from 'classnames/bind'

import style from 'components/service/PreparationNavbar.scss'
import ActiveBox from 'elements/ActiveBox.js'

const cx = classNames.bind(style)

const PreparationNavbar = ({ isMicTest, isCamTest, isPPTUpload }) => {
    return (
        <div className={cx('PreparationNavbar')}>
            <ActiveBox active={isMicTest} />
            <ActiveBox active={isCamTest} />
            <ActiveBox active={isPPTUpload} />
        </div>
    );
};

export default PreparationNavbar;