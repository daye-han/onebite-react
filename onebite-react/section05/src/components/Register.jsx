import {useState} from 'react';

// 간단한 회원가입 폼
const Register = () => {

    const [input, setInput] = useState({
        name : "",
        birth: "",
        country : "",
        bio : "",
    })

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    console.log(setInput);
    
    /* const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState(""); */

    /* const onChangeName = (e) => {
        setInput({
            ...input,
            name : e.target.value,
        })
    }

    const onChangeBirth = (e) => {
        setInput({
            ...input,
            birth : e.target.value,
        })
    }
    const onChangeCountry = (e) => {
        setInput({
            ...input,
            country : e.target.value,
        })
    }

    const onChangeBio = (e) => {
        setInput({
            ...input,
            bio : e.target.value,
        })
    } */


    return(
        <>  
            <div>
                <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />                
            </div>

            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" />
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
                {input.country}
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={(onChange)} />
            </div>
        </>
    )
}

export default Register;