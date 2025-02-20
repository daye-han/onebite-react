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
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
                    // {...todo}가 가능한 건가?
                    // list 컴포넌트에는 key 값을 지정해야함
                })}
            </div>
        </div>        
    )
}

export default List;


