import React, { useState } from 'react'
import classNames from 'classnames/bind'

import styles from 'components/LoginForm.scss'

const cx = classNames.bind(styles)


function LoginForm({ setHasCookie }) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const loginApi = (user) => {
        return fetch('/users/signin', {
            method: 'POST',
            headers: {
                'Content-Type':'application/'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = async (e) => {
        alert(email)
        alert(password)
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        try {
            const response = await loginApi({
            email: email,
            password: password
            });
        if (response.result === 'ok') {
            setHasCookie(true);
        } else {
            throw new Error(response.error);
        }
        } catch (err) {
            alert('로그인에 실패했습니다.');
            setEmail('');
            setPassword('');
            console.error('login error', err);
        }
    }

    return (
        <form 
            className={cx('LoginForm')}
            onSubmit={handleSubmit}
        >
            <input
                type="email"
                name="email"
                placeholder="이메일"
                value={email}
                onChange={handleEmail}
            />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={handlePassword}
            />
            <button type="submit">로그인</button>
        </form>
    )

}

export default LoginForm