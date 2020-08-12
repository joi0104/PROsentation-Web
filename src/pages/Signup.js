import React from 'react';
import classNames from 'classnames/bind'

import style from 'pages/Signup.scss'
import SignupForm from 'components/SignupForm'

const cx = classNames.bind(style)

const Signup = () => {
    return (
        <div className={ cx('Signup')}>
            <SignupForm />
        </div>
    );
};

export default Signup;