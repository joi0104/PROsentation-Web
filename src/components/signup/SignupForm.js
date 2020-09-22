import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'components/signup/SignupForm.scss'
import Input from 'elements/Input.js'
import { signupAPI } from 'api/http.js'

const cx = classNames.bind(style)

const SignupForm = () => {
  const [passwordCheck, setPasswordCheck] = useState('')
  const [coincideCheck, setCoincideCheck] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: '',
    username: '',
  })

  let history = useHistory()

  const initForm = () => {
    setForm({
      email: '',
      password: '',
      phone: '',
      username: '',
    })
  }

  const changeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const changePasswordCheck = (e) => {
    setPasswordCheck(e.target.value)
    if (e.target.value === form.password) {
      setCoincideCheck(true)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (
      !form.email ||
      !form.password ||
      !form.phone ||
      !form.username ||
      !coincideCheck
    ) {
      return
    }
    try {
      await signupAPI(form)
      alert('회원가입에 성공하였습니다.')
      initForm()
      history.goBack()
    } catch {
      alert('회원가입에 실패하였습니다.')
      initForm()
      history.goBack()
    }
  }

  return (
    <form className={cx('SigninForm')} onSubmit={onSubmit}>
      <Input
        type={'email'}
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
      <Input
        type={'password'}
        name={'passwordCheck'}
        value={passwordCheck}
        onChange={changePasswordCheck}
      />
      {coincideCheck ? (
        <p>비밀번호가 일치합니다</p>
      ) : (
        <p>비밀번호가 일치하지 않습니다.</p>
      )}
      <Input
        type={'text'}
        name={'username'}
        value={form.username}
        onChange={changeForm}
      />
      <Input
        type={'text'}
        name={'phone'}
        value={form.phone}
        onChange={changeForm}
      />
      <button type="submit">회원가입</button>
    </form>
  )
}

export default SignupForm
