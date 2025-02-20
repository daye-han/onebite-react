import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if(search == ""){
            return todos;
        }

        return todos.filter((todo) => 
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    }
    const filteredTodos = getFilteredData();

    return (
        <div className="List">
            <h4>Todo List ✨</h4>
            <input 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => { // JSX에서 map 매서드 사용하면 콜백 함수가 HTML 요소(+컴포넌트)를 반환하게 할 수 있음
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
                    // {...todo}가 가능한 건가? : 객체 전개 연산자(...)를 사용한 것. 중괄호 안에 객체가 오지 못하므로 객체를 펼쳐서 프롭스로 전달
                    // 리액트는 리스트 형태로 렌더링된 컴포넌트에 key 값을 지정해야함(오류발생)
                })}
            </div>
        </div>        
    )
}

export default List;