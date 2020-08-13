import React from 'react'
import classNames from 'classnames/bind'

import styles from './node_modules/components/Navbar.scss'
import Profile from './node_modules/components/Profile.js.js'

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