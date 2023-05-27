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
  const [firstOperand, setFirstOperand] = useState()
  const [isResult, setIsResult] = useState(false)

  function addNum(e){
    setAC('C')
    if (isResult===true){
      setCurrentVal(e.currentTarget.textContent)
      setIsResult(false)
    }
    else if (currentVal === 0 || newWindow){
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
    setFirstOperand()
    setCurOperation()
  }

  function processingOperation(val){
    setIsResult(false)
    setAC('C')
    setFirstOperand(currentVal)
    setCurOperation(val)
    setnewWindow(true)
  }

  function result(){
    setIsResult(true)
    let secondOperandResult = currentVal
    let firstOperandResult = firstOperand
    let currentResult

    firstOperandResult = Number(String(firstOperand).replace(',','.'))
    secondOperandResult = Number(String(secondOperandResult).replace(',','.'))
    if (curOperation ==="division"){

      if (secondOperandResult===0){
        setCurrentVal("Ошибка")
        return
        
      }else{
        currentResult = firstOperandResult/secondOperandResult
      }
    }
    else if (curOperation ==="multiply"){
      currentResult = firstOperandResult*secondOperandResult
    }
    else if (curOperation ==="minus"){
      currentResult = firstOperandResult-secondOperandResult
    }
    else if (curOperation ==="plus"){
      currentResult = firstOperandResult+secondOperandResult
    }
    else if (curOperation ==="persent"){
      currentResult = firstOperandResult+secondOperandResult
    }
    else{
      return
    }
    setCurOperation()
    setFirstOperand()
    setCurrentVal(String(Math.round(currentResult*1000000)/1000000).replace('.',','))
  }

  function persent(){
    if (firstOperand){
      setCurrentVal(String(firstOperand*String(currentVal).replace(',','.')/100).replace('.',','))
    }else{
      setCurrentVal(String(String(currentVal).replace(',','.')/100).replace('.',','))
    }
  }

  return (
    <div className="App">
      <main className='main'>
        <div className='main_window'>{currentVal}</div>
        <div className='main_btns'>
          <div className='main_item-btn'onClick={(e)=>clearWindow(e)}>{AC}</div>
          <div className='main_item-btn' onClick={()=>
            setCurrentVal(String(Number(String(currentVal).replace(',','.'))*(-1)).replace('.',','))}>
            <img src={imgSignBold} alt=''/></div>
          <div className='main_item-btn' onClick={()=>persent()}>%</div>
          <div className='main_item-btn' onClick={()=>processingOperation('division')}><img src={imgDivision} alt=''/></div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>7</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>8</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>9</div>
          <div className='main_item-btn' onClick={()=>processingOperation('multiply')}><img src={imgMultiply} alt=''/></div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>4</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>5</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>6</div>
          <div className='main_item-btn'  onClick={()=>processingOperation('minus')}><img src={imgMinus} alt=''/></div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>1</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>2</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>3</div>
          <div className='main_item-btn'  onClick={()=>processingOperation('plus')}><img src={imgPlus} alt=''/></div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>0</div>
          <div className='main_item-btn' onClick={(e)=>addNum(e)}>,</div>
          <div className='main_item-btn' onClick={()=>{result()}}>=</div>
        </div>
      </main>
    </div>
  );
}

export default App;
