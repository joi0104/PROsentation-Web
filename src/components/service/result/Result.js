import React from 'react'
import classNames from 'classnames/bind'

import style from './Result.scss'

const cx = classNames.bind(style)

const Result = ({ setResultOK }) => {
    const goNext = () => {
        setResultOK(true)
    }
    
    return (
        <div className={cx('Result')}>
            분석결과
            <button onClick={goNext}>완료</button>
        </div>
    )
}

export default Result