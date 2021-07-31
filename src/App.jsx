import "./App.css";
import { useState } from "react";

function App() {
  const [txt, setTxt] = useState("");
  const [res, setRes] = useState("");


  var btnFunc = (v) => {
    // console.log(v)
    let num = txt + v;
    // console.log(num)
    setTxt(num);
    setRes("");
  };
  var calculate = () => {
    let res = eval(txt)
    setTxt('');
    console.log(res)
    setRes(res)
  };

  var check = () => {
    let num = txt;
    console.log(num)
    let arr = [...num];
    let val = arr[arr.length - 1];

    if (val === "/" || val === "*" || val === "+" || val === "-") {
      document.getElementById("equal").disabled = true;
    } else if (document.getElementById("equal") === null) {
    } else {
      document.getElementById("equal").disabled = false;

    } 
  };

  var clr = () => {
    setTxt("");
    setRes("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AAA CALCULATOR</h1>
      </header>
      <div className="div-main">
        <div className="div-inp">
          <input className="inp" onChange={check()} value={txt} type="text" />
          <h1 className='h1-res'>{res}</h1>
        </div>
        <button
          className="clr-btn"
          onClick={(e) => {
            clr();
          }}
        >
          CLEAR
        </button>
        <div className="div-btn">
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            7
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            8
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            9
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            /
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            4
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            5
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            6
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            *
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            1
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            2
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            3
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            -
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            0
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            .
          </button>
          <button id="equal" onClick={() => calculate()}>
            =
          </button>
          <button
            onClick={(e) => {
              btnFunc(e.target.textContent);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
