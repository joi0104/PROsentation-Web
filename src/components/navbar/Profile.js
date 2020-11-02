import React, { useState, useContext } from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'components/navbar/Profile.scss'
import profileIcon from 'assets/images/profile.png'
import userIcon from 'assets/icons/icon-user.png'
import ProfileDropdown from 'components/navbar/ProfileDropdown.js'
import UserContext from 'contexts/user.js'

const cx = classNames.bind(style)

const Profile = ({ hasCookie, setHasCookie }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { state } = useContext(UserContext)
  let history = useHistory()

  const onClick = () => {
    if (hasCookie) {
      setShowDropdown(!showDropdown)
    } else {
      history.push('/signin')
    }
  }

  return (
    <div className={cx('Profile')}>
      {hasCookie ? (
        <>
          <p>반가워요! {state.username}님</p>
          <img src={userIcon} alt="profileIcon" onClick={onClick} />
        </>
      ) : (
        <img src={profileIcon} alt="profileIcon" onClick={onClick} />
      )}
      {showDropdown ? (
        <ProfileDropdown
          setShowDropdown={setShowDropdown}
          setHasCookie={setHasCookie}
        />
      ) : null}
    </div>
  )
}

export default Profile
