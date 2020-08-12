import React from 'react';
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'components/CheckItems.js'

const cx = classNames.bind(style)

const CheckItems = ({ match }) => {
    return (
        <div className={cx('CheckItem')}>
            이 준비물을 확인하세요!
            <Link to={`${match.path}/mictest`}>다음</Link>
        </div>
    );
};

export default CheckItems;