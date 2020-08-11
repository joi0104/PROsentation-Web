import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'components/Profile.scss'
import profileIcon from 'img/profile_icon.png'
import ProfileDropdown from 'components/ProfileDropdown.js'

const cx = classNames.bind(style)

function Profile(props) {
    const [ showDropdown, setShowDropdown ] = useState(false)
    let history = useHistory()

    const onClick = () => {
        if (props.hasCookie) {
            setShowDropdown(!showDropdown)
        } else {
            history.push("/login");
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