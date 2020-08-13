import React from 'react';
import classNames from 'classnames/bind'

import style from 'components/service/CheckItems.js'

const cx = classNames.bind(style)

const CheckItems = ({ setIsCheckItems }) => {
    const onClick = () => {
        setIsCheckItems(true)
    }

    return (
        <div className={cx('CheckItem')}>
            이 준비물을 확인하세요!
            <button onClick={onClick}>다음</button>
        </div>
    );
};

export default CheckItems;