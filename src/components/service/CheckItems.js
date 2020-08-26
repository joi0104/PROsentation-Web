import React from 'react';
import classNames from 'classnames/bind'

import style from 'components/service/CheckItems.scss'
import ItemBox from 'components/service/ItemBox.js'

const cx = classNames.bind(style)

const CheckItems = ({ setIsCheckItems }) => {
    const onClick = () => {
        setIsCheckItems(true)
    }

    return (
        <div className={cx('CheckItems')}>
            <div id="notice">
                <p>이제 웹캠과 미아크 연결 상태를 확인해볼게요.</p>
                <p>먼저, 연결 상태를 확인하기 위해 웹캠과 마이크를 준비해주세요.</p>
            </div>
            <div id="itemBoxs">
                <ItemBox text="발표자료 업로드" src="" />
                <ItemBox text="웹캠 확인" src="" />
                <ItemBox text="마이크 확인" src="" />
            </div>
            <div id="next">
                <button onClick={onClick}>다음</button>
            </div>
        </div>
    );
};

export default CheckItems;