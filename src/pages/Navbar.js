import React from 'react'
import classNames from 'classnames/bind'

import styles from 'pages/Navbar.scss'
import Profile from 'components/Profile.js'


const cx = classNames.bind(styles)

function Navbar(props) {
    return (
        <div className={cx('Navbar')}>
           <h1>PROsentation</h1>
           <Profile hasCookie={props.hasCookie}/>
        </div>
    );
}

export default Navbar