import React from 'react';
import classNames from 'classnames/bind'

import styles from 'pages/Login.scss'

const cx = classNames.bind(styles)

function Login() {
    return (
        <div className={cx('Login')}>
            Login 페이지
        </div>
    );
}

export default Login;