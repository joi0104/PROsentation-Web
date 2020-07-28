import React from 'react';
import classNames from 'classnames/bind'
import { Link } from "react-router-dom"

import styles from './Main.scss'

const cx = classNames.bind(styles)

function Main() {
    return (
        <div className={cx('Main')}>
            <Link to="/login">로그인</Link>
        </div>
    );
}

export default Main;