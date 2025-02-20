import './App.css'
import {useState, useRef, useReducer} from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
// import Exam from './components/Exam';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=> item.id === action.targetId ? {...item, isDone : !item.isDone} : item )
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId )
  }
}

function App() {
  //const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); 

  const onCreate = (content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content : content, 
        date : new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId : targetId,
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId,
    })
    /* setTodos(
      todos.filter((todo) => todo.id !== targetId)
    ) */
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App

/*

useRef() 값을 기억할 때 사용
  current 키값을 가지고 있는 객체 반환
  current 에 값이나 DOM 요소 저장 가능
  값이 바뀌어도 컴포넌트 리렌더링X
  ref로 접근

*/
