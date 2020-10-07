import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'components/navbar/Profile.scss'
import profileIcon from 'assets/images/profile.png'
import ProfileDropdown from 'components/navbar/ProfileDropdown.js'

const cx = classNames.bind(style)

const Profile = ({ hasCookie, setHasCookie }) => {
  const [showDropdown, setShowDropdown] = useState(false)
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
      <img src={profileIcon} alt="profileIcon" onClick={onClick} />
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
