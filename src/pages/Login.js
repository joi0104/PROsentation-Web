import React from 'react';
import classNames from 'classnames/bind'

import style from 'pages/Login.scss'
import LoginForm from 'components/LoginForm.js'

const cx = classNames.bind(style)

function Login(props) {
    return (
        <div className={cx('Login')}>
            <LoginForm setHasCookie={props.setHasCookie}/>
        </div>
    );
}

export default Login;