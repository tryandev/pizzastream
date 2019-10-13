import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import process_icon from './img/process_icon.png';
import make_icon from './img/make_icon.png';
import deliver_icon from './img/deliver_icon.png';
import './css/App.css';
import Step from './comps/Step';

function App() {

  let [time, setTime] = useState(0), [data] = useState([
    {step: 1, title: 'Processing your order', icon: process_icon, desc: 'Checkin’ it twice'},
    {step: 2, title: 'Making the pizza', icon: make_icon, desc: 'Kneadin’, shapin’, bakin’'},
    {step: 3, title: 'Delivering your pizza', icon: deliver_icon, desc: 'Deliverin’'}
  ]);

  useEffect(() => {
    if (time > 60) return;      
    let interval = setInterval(() => {
      setTime(Math.min(time + 5, 60));
      time === 0 && clearInterval(interval);
    }, 1000);  
    return () => clearInterval(interval);
  }, [time]);

  let steps = data.map(
    (el, i) => 
      <Step key={i} info={el}
        current={Math.floor(time / 20) === i} 
        done={Math.floor(time / 20) > i} />
  );

  let loaderClass = time < 60 ? "" : "finished";
  return (
    <React.Fragment>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <section className="prompt thank">
        <h2>Thanks for your order!</h2>
        <p>See below for the status of your pizza.</p>
      </section>
      <section className="process-section">
        <ul className={`process ${loaderClass}`}>
          {steps}
        </ul>
      </section>
      <section className={`loader ${loaderClass}`}>
        <div></div>
      </section>
      <section className="prompt time">
        <p>{time < 60 ? 'It’ll take about' : "Order complete"}</p>
        <h2>{time < 60 ? `${60 - time} minutes` : "Pizza delivered"}</h2>
      </section>	
    </React.Fragment>
  );
}
export default App;
