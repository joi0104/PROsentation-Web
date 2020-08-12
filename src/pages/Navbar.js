import React from 'react'
import classNames from 'classnames/bind'

import styles from 'pages/Navbar.scss'
import Profile from 'components/Profile.js'

const cx = classNames.bind(styles)

const Navbar = ({ hasCookie }) => {
    return (
        <div className={cx('Navbar')}>
           <h1>PROsentation</h1>
           <Profile hasCookie={hasCookie}/>
        </div>
    );
}

export default Navbar