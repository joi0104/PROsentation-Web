import React from 'react';
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'components/ProfileDropdown.scss'

const cx = classNames.bind(style)

const ProfileDropdown = () => {
    return (
        <ul className={cx('ProfileDropdown')}>
            <li><Link>로그아웃</Link></li>
            <li><Link to="/myvideo">나의 발표영상</Link></li>
            <li><Link to="premium">프리미엄 서비스</Link></li>
        </ul>
    );
};

export default ProfileDropdown;