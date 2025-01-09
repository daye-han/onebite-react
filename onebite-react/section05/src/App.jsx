import './App.css';
import { useState } from 'react'; // state 사용하려면 useState 내장 함수를 react 에서 불러오기

const Bulb = ({light}) => {
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{backgroundColor:"orange"}}>ON</h1>
      ) : (
        <h1 style={{backgroundColor:"gray"}}>OFF</h1>
      )}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);  // 컴포넌트 내에서 함수 호출
  const [light, setLight] = useState("Off");

  return (
    <>
    <div>      
      <Bulb light={light} />
      <button onClick={()=>{
        setLight(light === 'ON' ? 'OFF' : 'ON')
      }}>
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>증가</button>
    </div>
    </>
  )
}


export default App
