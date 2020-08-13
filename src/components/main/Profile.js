import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from './node_modules/components/Profile.scss'
import profileIcon from 'img/profile_icon.png'
import ProfileDropdown from './node_modules/components/ProfileDropdown.js.js'

const cx = classNames.bind(style)

const Profile = ({ hasCookie }) => {
    const [ showDropdown, setShowDropdown ] = useState(false)
    let history = useHistory()

    const onClick = () => {
        if (hasCookie) {
            setShowDropdown(!showDropdown)
        } else {
            history.push("/signin");
        }
    }

    return (
        <div className={cx('Profile')}>
            <img src={profileIcon} alt='profileIcon' onClick={onClick}/>
            {showDropdown? <ProfileDropdown /> :null}
        </div>
    )
}

export default Profile