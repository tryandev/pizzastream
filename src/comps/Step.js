import React from 'react';

const Step = React.memo(({current, done, info}) => {  
    let flags = [];
    if (current) flags.push('current');
    if (done) flags.push('done');
    let {step, title, icon, desc} = info;
    return (
        <li className={flags.join(' ')}>
            <div className="step"><span>{step}</span></div>
            <p className="title">{title}</p>
            <div className="logo">
                <img src={icon} alt="logo"/>
            </div>
            <p className="desc">{desc}</p>
        </li>
    );
});

export default Step