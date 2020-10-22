import React, { useContext } from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'components/navbar/ProfileDropdown.scss'
import iconDelete from 'assets/icons/icon-delete.png'
import iconUser from 'assets/icons/icon-user.png'
import UserContext from 'contexts/user.js'

const cx = classNames.bind(style)

const ProfileDropdown = ({ setShowDropdown, setHasCookie }) => {
  const { state } = useContext(UserContext)

  const onLogout = () => {
    setShowDropdown(false)
    setHasCookie(false)
  }

  return (
    <div className={cx('ProfileDropdown')}>
      <div className={cx('jumbotron')}>
        <img
          src={iconDelete}
          alt="icon-delete"
          onClick={() => {
            setShowDropdown(false)
          }}
        />
        <img src={iconUser} alt="icon-user" />
        <p className={cx('title')}>마이페이지</p>
        <p className={cx('email')}>{state.email}</p>
      </div>
      <div className={cx('list')}>
        <Link className={cx('myinfo')} to="/user/myinfo">
          나의 정보
        </Link>
        <Link className={cx('myvideo')} to="/user/myvedio">
          나의 발표영상
        </Link>
        <Link className={cx('premium')} to="/user/premium">
          프리미엄 서비스
        </Link>
        <p className={cx('logout')} onClick={onLogout}>
          LOGOUT
        </p>
      </div>
    </div>
  )
}

export default ProfileDropdown
