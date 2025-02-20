import {useParams} from 'react-router-dom'; // url 파라미터를 가져오는 훅

const Diary = () => {
    const params = useParams();

    return <div>{params.id}Diary</div>
}

export default Diary;