import React from 'react'
import classNames from 'classnames/bind'

import styles from 'components/navbar/Navbar.scss'
import Profile from 'components/navbar/Profile.js'

const cx = classNames.bind(styles)

const Navbar = ({ hasCookie }) => {
  return (
    <div className={cx('Navbar')}>
      <h1>PROsentation</h1>
      <Profile hasCookie={hasCookie} />
    </div>
  )
}

export default Navbar
