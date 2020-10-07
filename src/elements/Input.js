import React, { useRef } from 'react'
import classNames from 'classnames/bind'

import style from 'elements/Input.scss'

const cx = classNames.bind(style)

const Input = ({ label, name, type, value, changeForm }) => {
  const inputRef = useRef()
  const msgRef = useRef()

  const invalidMsg = {
    email: '이메일 형식이 올바르지 않습니다.',
    password: '비밀번호는 8~20자 이내로 입력해주세요.',
    passwordCheck: '동일한 비밀번호를 입력해주세요.',
    username: '닉네임을 입력해주세요.',
    phone: '휴대폰 번호를 입력해주세요.',
  }

  const onChange = (e) => {
    if (e.target.validity.valid) {
      msgRef.current.style.visibility = 'hidden'
      inputRef.current.style.border = 'solid 1px #00cccc'
    } else {
      msgRef.current.style.visibility = 'visible'
      inputRef.current.style.border = 'solid 1px #fa6462'
    }
    changeForm(e)
  }

  return (
    <div className={cx('Input')}>
      <label>{label}</label>
      <input
        required
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p ref={msgRef}> {invalidMsg[name]} </p>
    </div>
  )
}

export default Input
