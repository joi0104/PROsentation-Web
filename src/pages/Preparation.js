import React, { useState } from 'react';
import classNames from 'classnames/bind'
import { Route, Switch } from 'react-router-dom'

import style from 'pages/Preparation.scss'
import PreparationNavbar from 'components/PreparationNavbar.js'
import MicTest from 'components/MicTest.js'
import CamTest from 'components/CamTest.js'
import PPTUpload from 'components/PPTUpload.js'
import CheckItems from 'components/CheckItems.js'

const cx = classNames.bind(style)

const Preparation = ({ match }) => {
    const [process, setProcess] = useState({
        micTest: false,
        camTest: false,
        pptUpload: false
    })
    return (
        <div className={cx('Preparation')}>
            <PreparationNavbar process={process}/>
            <Route path={match.path} exact component={({ match }) => <CheckItems match={match} />} />
            <Route path={`${match.path}/mictest`} exact component={() => <MicTest process={process} setProcess={setProcess} />} />
            <Route path={`${match.path}/camtest`} exact component={() => <CamTest process={process} setProcess={setProcess} />} />
            <Route path={`${match.path}/pptupload`} exact component={() => <PPTUpload process={process} setProcess={setProcess} />} />
        </div>
    );
};

export default Preparation;