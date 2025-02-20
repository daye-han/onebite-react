import './App.css'
import {useState, useRef} from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

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


function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3); 

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : content, 
      date : new Date().getTime(),
    }
    setTodos([newTodo, ...todos]);
  }
  
  
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo)=> // map 함수로 새로운 배열 생성
        todo.id === targetId
          ? {...todo, isDone : !todo.isDone} // 새로운 객체(기존 todo 객체를 복사하고 isDone 속성만 *덮어쓰기*)
          : todo
      )
    )
  }
  /* 축약 전
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo)=>{
        if(targetId === todo.id){
          return {...todo, isDone : !todo.isDone}
        }else{
          return todo
        }
      })
    )
  } */

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => todo.id !== targetId)
    )
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
