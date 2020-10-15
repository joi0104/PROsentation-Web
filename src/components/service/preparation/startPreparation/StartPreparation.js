import React from 'react'
import classNames from 'classnames/bind'

import style from './StartPreparation.scss'
import CheckItems from 'components/service/preparation/checkItems/CheckItems.js'
import Description from 'elements/Description.js'
import Button from 'elements/Button.js'

const cx = classNames.bind(style)

const StartPreparation = ({ setCheckItemsOK }) => {
  const goNext = () => {
    setCheckItemsOK(true)
  }
  return (
    <div className={cx('StartPreparation')}>
      <Description>
        이제부터 다음과 같이 발표를 위한 준비를 해보겠습니다. 준비 시작하기
        버튼을 눌러주세요.
      </Description>

      <CheckItems PPTUploadOK={false} micTestOK={false} camTestOK={false} />
      <Button onClick={goNext}>준비 시작하기</Button>
    </div>
  )
}

export default StartPreparation
