import React from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'components/navbar/ProfileDropdown.scss'
import iconDelete from 'assets/icons/icon-delete.png'
import iconUser from 'assets/icons/icon-user.png'

const cx = classNames.bind(style)

const ProfileDropdown = ({ setShowDropdown, setHasCookie }) => {
  let history = useHistory()

  const onLogout = () => {
    setHasCookie(false)
    setShowDropdown(false)
    history.push('/')
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
        <p className={cx('email')}>abcd@abcd.efg</p>
      </div>
      <div className={cx('list')}>
        <p
          className={cx('myinfo')}
          onClick={() => {
            history.push('/user/myinfo')
          }}
        >
          나의 정보
        </p>
        <p
          className={cx('myvideo')}
          onClick={() => {
            history.push('/user/myvedio')
          }}
        >
          나의 발표영상
        </p>
        <p
          className={cx('premium')}
          onClick={() => {
            history.push('/user/premium')
          }}
        >
          프리미엄 서비스
        </p>
        <p className={cx('logout')} onClick={onLogout}>
          LOGOUT
        </p>
      </div>
    </div>
  )
}

export default ProfileDropdown
