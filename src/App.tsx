import React from 'react';

import './styles/global.css';
import './styles/landing.css';

import logoImg from './images/cyberpunk-logo.svg';

function App() {
  return (
    <div id='page-landing'>
      <div className='content-wrapper'>
        <img src={logoImg} alt='Cyberpunk' />
        <div className='cowntdown-ontainer'>
          <h1>Countdown</h1>
          <h2>00:00:00:00</h2>
        </div>
      </div>
      <div className='grid-container'>
        <div className='grid-1'>
          <h1>test1</h1>
        </div>
        <div className='grid-2'>
          <h1>test2</h1>
        </div>
        <div className='grid-3'>
          <h1>test3</h1>
        </div>
        <div className='grid-4'>
          <h1>test4</h1>
        </div>
        <div className='grid-5'>
          <h1>test5</h1>
        </div>
        <div className='grid-6'>
          <h1>test6</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
