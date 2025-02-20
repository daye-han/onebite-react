import './App.css';
import { useState } from 'react';
// import { useState } from 'react'; // state 사용하려면 useState 내장 함수를 react 에서 불러오기

import Register from './components/Register';

function App() {
   
  const [count, setCount] = useState(1);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count + 1)}}>+</button>

      <div>
        <h1>{light}</h1>
        <button onClick={()=>{setLight(light === "ON" ? "OFF" : "ON")}}>
          {
            light === "ON" ? "끄기" : "켜기"
          }
        </button>
      </div>

      <Register />
    </>
  )
}


export default App
