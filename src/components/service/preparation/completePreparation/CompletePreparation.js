import React from 'react'
import classNames from 'classnames/bind'

import style from './CompletePreparation.scss'
import CheckItems from 'components/service/preparation/checkItems/CheckItems.js'
import Description from 'elements/Description.js'
import Button from 'elements/Button.js'

const cx = classNames.bind(style)

const CompletePreparation = ({ setPreparationOK }) => {
  const goNext = () => {
    setPreparationOK(true)
  }

  return (
    <div className={cx('CompletePreparation')}>
      <Description>
        좋아요! 이제 모든 준비가 끝났어요. ‘발표 영상 촬영하기’ 버튼을 눌러
        본격적으로 발표를 촬영해보세요!
      </Description>
      <CheckItems PPTUploadOK={true} micTestOK={true} camTestOK={true} />
      <Button onClick={goNext}>발표영상 촬영하기</Button>
    </div>
  )
}

export default CompletePreparation
