import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from 'pages/Navbar.scss'

const cx = classNames.bind(styles)

function Navbar() {
    return (
        <div className={cx('Navbar')}>
           <h1>PROsentation</h1>
           <Link to="/login">로그인</Link>
        </div>
    );
}

export default Navbar