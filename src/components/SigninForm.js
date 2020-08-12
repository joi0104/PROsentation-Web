import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useHistory, Link } from 'react-router-dom'

import styles from 'components/SigninForm.scss'
import Input from 'elements/Input.js'

const cx = classNames.bind(styles)

const SigninForm = ({ setHasCookie }) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    let history = useHistory()

    const loginApi = (form) => {
        return fetch('/users/signin', {
            method: 'POST',
            headers: {
                'Content-Type':'application/'
            },
            body: JSON.stringify(form)
        }).then(res => res.json())
    }

    const initForm = () => {
        setForm({
            email: '',
            password: ''
        })
    }

    const changeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })   
    }

    const submitForm = async (e) => {
        alert(form.email)
        alert(form.password)
        e.preventDefault();
        if (!form.email || !form.password) {
            return;
        }
        /* try {
            const response = await loginApi(form);
        if (response.result === 'ok') {
            setHasCookie(true);
        } else {
            throw new Error(response.error);
        }
        } catch (err) {
            alert('로그인에 실패했습니다.');
            initForm();
        } */

        if(form.email === 'a@a' && form.password === 'a') {
            setHasCookie(true)
            history.goBack()
        } else {
            alert('로그인에 실패했습니다.');
            initForm();
        }

    }

    return (
        <form 
            className={cx('SigninForm')}
            onSubmit={submitForm}
        >   
            <Input type={"email"} name={"email"} value={form.email} onChange={changeForm} />
            <Input type={"password"} name={"password"} value={form.password} onChange={changeForm} />
            <button type="submit">로그인</button>
            <Link to="/signup">회원가입</Link>
        </form>
    )

}

export default SigninForm