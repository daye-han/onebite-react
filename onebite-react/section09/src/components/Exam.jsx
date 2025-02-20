import { useReducer } from "react";

function reducer(state, action) {
    /* if(action.type === 'INCREASE') {
        return state + action.data;
    }else if(action.type === 'Minus'){
        return state - action.data;
    } */
    switch (action.type) {
        case 'INCREASE':
            return state + action.data;    
        case 'Minus':
            return state - action.data;    
        default:
            return state;
    }
}


const Exam = () => {
    // dispatch : 발송하다(상태변화 알림)
    const [state, dispatch] = useReducer(reducer, 0); //함수, 초기값
    
    const onClickPlus = () => {        
        dispatch({ // 액션객체 : 인수로 상태가 어떻게 변경되길 원하는지 전달
            type :"INCREASE",
            data : 1,
        });
    }
    const onClickMinus = () => {        
        dispatch({ // 액션객체 : 인수로 상태가 어떻게 변경되길 원하는지 전달
            type :"Minus",
            data : 1,
        });
    }
    
    return(
        <>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </>
    )
}

export default Exam;