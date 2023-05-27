import { useState } from 'react';
import './App.scss';
import imgDivision from './img/division.png'
import imgMultiply from './img/multyply.png'
import imgSignBold from './img/signBold.png'
import imgMinus from './img/minus.png'
import imgPlus from './img/plus.png'

function App() {

  const [currentVal, setCurrentVal] = useState(0)
  const [AC, setAC] = useState('AC')
  const[curOperation, setCurOperation] =useState()
  const[newWindow, setnewWindow] =useState(false)
  const [firstOperand, setFirstOperand] = useState('')

  function addNum(e){
    setAC('C')
    
    if (currentVal === 0 || newWindow){
      setnewWindow(false)
      setCurrentVal(e.currentTarget.textContent)
    }else{
      if (String(currentVal).length<9){
        setCurrentVal(String(currentVal) + String(e.currentTarget.textContent))
      }
    }
  }

  function clearWindow(e){
    setAC('AC')
    setCurrentVal(0)
    setCurOperation()
  }

  function processingOperation(val){
    setAC('C')
    setFirstOperand(currentVal)
    setCurOperation(val)
    setnewWindow(true)
  }

  function result(){
    let secondOperandResult = currentVal
    let firstOperandResult = firstOperand
    let currentResult
    
    firstOperandResult = Number(String(firstOperand).replace(',','.'))
    secondOperandResult = Number(String(secondOperandResult).replace(',','.'))
    if (curOperation ==="division"){
      currentResult = firstOperandResult/secondOperandResult
    }

    setCurrentVal(String(Math.round(currentResult*1000000)/1000000).replace('.',','))
  }

  return (
    <div className="App">
      <main className='main'>
        <div className='main_window'>{currentVal}</div>
        <div className='main_btns'>
          <div className='main_item-btn'onClick={(e)=>clearWindow(e)}>{AC}</div>
          <div className='main_item-btn'><img src={imgSignBold} alt=''/></div>
          <div className='main_item-btn' onClick={()=>processingOperation('persent')}>%</div>
          <div className='main_item-btn' onClick={()=>processingOperation('division')}><img src={imgDivision} alt=''/></div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>7</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>8</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>9</div>
          <div className='main_item-btn'><img src={imgMultiply} alt=''/></div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>4</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>5</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>6</div>
          <div className='main_item-btn'><img src={imgMinus} alt=''/></div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>1</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>2</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>3</div>
          <div className='main_item-btn'><img src={imgPlus} alt=''/></div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>0</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>,</div>
          <div className='main_item-btn' onClick={()=>{
            result()
          }}>=</div>
        </div>
      </main>
    </div>
  );
}

export default App;
