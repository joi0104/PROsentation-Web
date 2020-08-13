import React from 'react';
import classNames from 'classnames/bind'
import { Route } from 'react-router-dom'

import style from 'pages/service/Service.scss'
import Preparation from 'pages/service/Preparation.js'
import Recoding from 'pages/service/Recoding.js'
import Result from 'pages/service/Result.js'

const cx = classNames.bind(style)

const Service = () => {
    
    return (
        <div className={cx('Service')}>
            <Route path="/service/preparation" component={Preparation} />
            <Route path="/service/recoding" component={Recoding} />
            <Route path="/service/result" component={Result} />
        </div>
    );
};

export default Service;