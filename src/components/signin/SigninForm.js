import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

import styles from 'components/signin/SigninForm.scss'
import Input from 'elements/Input.js'
import { signinAPI } from 'api/http.js'

const cx = classNames.bind(styles)

const SigninForm = ({ setHasCookie }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  let history = useHistory()

  const initForm = () => {
    setForm({
      email: '',
      password: '',
    })
  }

  const changeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      return
    }
    try {
      let res = await signinAPI(form)
      axios.defaults.headers.common['X-AUTH-TOKEN'] = res.data.token
      alert('로그인에 성공하였습니다.')
      setHasCookie(true)
      initForm()
      history.goBack()
    } catch {
      alert('로그인에 실패하였습니다.')
      initForm()
      history.goBack()
    }
  }

  return (
    <form className={cx('SigninForm')} onSubmit={onSubmit}>
      <Input
        type={'text'}
        name={'email'}
        value={form.email}
        onChange={changeForm}
      />
      <Input
        type={'password'}
        name={'password'}
        value={form.password}
        onChange={changeForm}
      />
      <button type="submit">로그인</button>
      <Link to="/signup">회원가입</Link>
    </form>
  )
}

export default SigninForm
