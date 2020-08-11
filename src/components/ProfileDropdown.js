import React from 'react';
import classNames from 'classnames/bind'

import style from 'components/ProfileDropdown.scss'

const cx = classNames.bind(style)

const ProfileDropdown = () => {
    return (
        <ul className={cx('ProfileDropdown')}>
            <li>로그아웃</li>
            <li>나의 발표영상</li>
            <li>프리미엄 서비스</li>
        </ul>
    );
};

export default ProfileDropdown;