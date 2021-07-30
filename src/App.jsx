import "./App.css";
import { useState } from "react";

function App() {
  const [txt, setTxt] = useState('');    
  var btnFunc = (v) => {
    // console.log(v)
    let num = txt + v
    // console.log(num)
    setTxt(num)
  };
  var calculate = () => {
    console.log(eval(txt))
    setTxt((eval(txt)))
  };
  var clr = () => {
    setTxt('')
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>AAA CALCULATOR</h1>
      </header>
      <div className="div-main">
        <div className="div-inp">
          <input className="inp" value={txt} type="text" />
        </div>
        <button style={{width: '60%', marginLeft: '100px', height: '35px', fontSize: '25px',backgroundColor: 'skyblue'}} onClick={(e)=>{clr()}}>CLEAR</button>
        <div className="div-btn">
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>7</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>8</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>9</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>/</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>4</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>5</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>6</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>*</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>1</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>2</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>3</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>-</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>0</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>.</button>
          <button onClick={()=>calculate()}>=</button>
          <button onClick={(e)=>{btnFunc(e.target.textContent)}}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
