import React from 'react';
import { BsTerminal, BsArrowRight } from 'react-icons/bs';
import { ImEarth, ImQrcode } from 'react-icons/im';
import { IoMdPlanet, IoMdList, IoMdImages } from 'react-icons/io';

import './styles/global.css';
import './styles/landing.css';

import Countdown from './components/Countdown';
import logoImg from './images/cyberpunk-logo.svg';
// import samuraiLogoImg from './images/samurai-logo.svg';

function App() {
  return (
    <div id='page-landing'>
      <div className='content-wrapper'>
        <img src={logoImg} alt='Cyberpunk' />
        <div className='cowntdown-container'>
          <h1>Countdown</h1>
          <Countdown />
        </div>
        {/* <div className='samurai-container'>
          <img src={samuraiLogoImg} alt='Samurai' className='samurai-logo' />
        </div> */}
      </div>
      <div className='grid-container'>
        <div className='grid-1'>
          <div className='box-content'>
            <BsTerminal className='grid-top-icon' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea
              odio aliquam impedit expedita a eius. Quo officia, impedit ad,
              minus doloribus, nemo velit modi rem fuga expedita at rerum?
            </p>
          </div>
        </div>
        <div className='grid-2'>
          <div className='box-content'>
            <ImEarth className='grid-top-icon' />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              praesentium quia delectus similique, impedit accusantium, facilis
              officia rerum aut nisi qui porro cupiditate dolor nobis vitae iure
              nihil, atque quas.
            </p>
            <div className='grid-btn'>
              <a className='btn'>
                Look this <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className='grid-3'>
          <div className='box-content'>
            <ImQrcode className='grid-top-icon' />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              perspiciatis vitae tempora asperiores veritatis ea aliquam harum,
              impedit enim dolor reiciendis commodi adipisci fugit obcaecati
              neque magnam totam inventore? Minus!
            </p>
            <div className='grid-btn'>
              <a className='btn'>
                See more <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className='grid-4'>
          <div className='box-content'>
            <IoMdImages className='grid-top-icon' />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              iste saepe eaque cupiditate rem atque animi nesciunt similique
              nostrum minus quisquam dolore omnis tempore asperiores repudiandae
              quos labore, magni eos?
            </p>
            <div className='grid-btn'>
              <a className='btn'>
                Go to albums <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className='grid-5'>
          <div className='box-content'>
            <IoMdPlanet className='grid-top-icon' />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              expedita voluptate id facere accusamus praesentium.
            </p>
          </div>
        </div>
        <div className='grid-6'>
          <div className='box-content'>
            <IoMdList className='grid-top-icon' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              doloremque illum explicabo ad hic exercitationem dolores cumque
              ratione cum nihil ipsa, aut ipsum laborum est nam fuga repellat
              totam at.
            </p>
            <div className='grid-btn'>
              <a className='btn'>
                Buy <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
