import { useState } from 'react';
import './App.scss';
import imgDivision from './img/division.png'
import imgMultiply from './img/multyply.png'
import imgSignBold from './img/signBold.png'
import imgMinus from './img/minus.png'
import imgPlus from './img/plus.png'

function App() {
  const [currentVal, SetCurrentVal] = useState('0')
  return (
    <div className="App">
      <main className='main'>
        <div className='main_window'>{currentVal}</div>
        <div className='main_btns'>
          <div className='main_item-btn'>AC</div>
          <div className='main_item-btn'><img src={imgSignBold} alt=''/></div>
          <div className='main_item-btn'>%</div>
          <div className='main_item-btn'><img src={imgDivision} alt=''/></div>
          <div className='main_item-btn'>7</div>
          <div className='main_item-btn'>8</div>
          <div className='main_item-btn'>9</div>
          <div className='main_item-btn'><img src={imgMultiply} alt=''/></div>
          <div className='main_item-btn'>4</div>
          <div className='main_item-btn'>5</div>
          <div className='main_item-btn'>6</div>
          <div className='main_item-btn'><img src={imgMinus} alt=''/></div>
          <div className='main_item-btn'>1</div>
          <div className='main_item-btn'>2</div>
          <div className='main_item-btn'>3</div>
          <div className='main_item-btn'><img src={imgPlus} alt=''/></div>
          <div className='main_item-btn'>0</div>
          <div className='main_item-btn'>,</div>
          <div className='main_item-btn'>=</div>
        </div>
      </main>
    </div>
  );
}

export default App;
