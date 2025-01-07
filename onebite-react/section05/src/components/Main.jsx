import './Main.css'

const Main = () => {
    const user = {
        name : '이정환',
        isLogin : false,
    };

    /* return (
        <>
            {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}      
        </>
    ) */

    if(user.isLogin){
        return <div 
            style={{
                backgroundColor:"red",
                borderBottom:"5px solid blue",
            }} // 객체로?
        >로그아웃</div>
    } else {
        return <div className="logout">로그인</div>
    }

}

export default Main;