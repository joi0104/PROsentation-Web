import React from 'react'
import classNames from 'classnames/bind'

import style from 'elements/Input.scss'

const cx = classNames.bind(style)

const Input = (props) => {
  return (
    <div className={cx('Input')}>
      <label>{props.name}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input
