import './Editor.css'
import {useState, useRef} from 'react';

const Editor = ({ onCreate }) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChagneContent = (e) => {
        setContent(e.target.value)
        //console.log(e.target.value);
    }

    const onSubmit = () =>{
        if(content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    const onKeyDown = (e)=> {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChagneContent}
                placeholder="새로운 Todo.."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;

/*

onChangeContent 함수의 e 매개변수는 이벤트 객체임

React의 데이터 흐름은 단방향
value={content} 를 통해서 value값과 content상태를 연결하지만, value속성에 content상태값을 설정하는 것.
 == content 상태값을 input value 값으로 입력한다.
value -> content 는 setContent를 통해 수동으로 반영해줘야함
content -> value 는 자동으로 바뀜

*/