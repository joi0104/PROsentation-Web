import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from 'components/navbar/Navbar.scss'
import Profile from 'components/navbar/Profile.js'
import logoIcon from 'assets/images/logo.png'

const cx = classNames.bind(styles)

const Navbar = ({ hasCookie, setHasCookie }) => {
  return (
    <div className={cx('Navbar')}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img className={cx('Navbar-logo')} src={logoIcon} alt="logo" />
      </Link>
      <Profile hasCookie={hasCookie} setHasCookie={setHasCookie} />
    </div>
  )
}

export default Navbar
