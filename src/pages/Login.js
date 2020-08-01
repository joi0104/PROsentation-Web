import React from 'react';
import classNames from 'classnames/bind'

import styles from 'pages/Login.scss'
import LoginForm from 'components/LoginForm.js'

const cx = classNames.bind(styles)

function Login() {
    return (
        <div className={cx('Login')}>
            <LoginForm />
        </div>
    );
}

export default Login;