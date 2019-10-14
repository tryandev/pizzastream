import React from 'react';

const Step = React.memo(({phase, info}) => {  
    let {step, title, icon, desc} = info;
    return (
        <li className={'phase-item ' + phase}>
            <div className={'phase-num ' + phase}><span>{step}</span></div>
            <p className="phase-title">{title}</p>
            <div className={'phase-logo ' + phase}>
                <img src={icon} alt="logo" className="phase-img" />
            </div>
            <p className={'phase-desc ' + phase}>{desc}</p>
        </li>
    );
});

export default Step