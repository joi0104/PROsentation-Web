import React, { useState } from 'react';
import classNames from 'classnames/bind'

import style from 'pages/service/Preparation.scss'
import PreparationNavbar from 'components/service/PreparationNavbar.js'
import MicTest from 'components/service/MicTest.js'
import CamTest from 'components/service/CamTest.js'
import PPTUpload from 'components/service/PPTUpload.js'
import CheckItems from 'components/service/CheckItems.js'

const cx = classNames.bind(style)

const Preparation = () => {
    const [isCheckItems, setIsCheckItems] = useState(false)
    const [isMicTest, setIsMicTest] = useState(false)
    const [isCamTest, setIsCamTest] = useState(false)
    const [isPPTUpload, setIsPPTUpload] = useState(false)

    return (
        <div className={cx('Preparation')}>
            <h2>발표 준비하기</h2>
            <div id="content">
                <PreparationNavbar isMicTest={isMicTest} isCamTest={isCamTest} isPPTUpload={isPPTUpload}/>
                { !isCheckItems? <CheckItems setIsCheckItems={setIsCheckItems}/> : 
                    !isMicTest? <MicTest setIsMicTest={setIsMicTest}/>:
                    !isCamTest? <CamTest setIsCamTest={setIsCamTest}/>:
                    !isPPTUpload? <PPTUpload setIsPPTUpload={setIsPPTUpload}/> : <>완료!</>
                }
            </div>
        </div>
    );
};

export default Preparation;