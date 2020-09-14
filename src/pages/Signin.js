import React from 'react'
import classNames from 'classnames/bind'

import style from 'pages/Signin.scss'
import SigninForm from 'components/signin/SigninForm.js'

const cx = classNames.bind(style)

const Signin = ({ setHasCookie }) => {
    return (
        <div className={cx('Signin')}>
            <SigninForm setHasCookie={setHasCookie}/>
        </div>
    )
}

export default Signin