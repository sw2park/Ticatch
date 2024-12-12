import { useParams } from "react-router-dom";
import axios from 'axios';

export default function SaveBtn() {
    const { seqpfjoinId } = useParams();

    // 찜하기
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // 세션 저장
        sessionStorage.setItem('user_id', 'test2');

        // 사용자의 세션 아이디를 가져오기
        const userId = sessionStorage.getItem('user_id');
        console.log("Review sessionId : " + userId);
        
        if (!userId) {
            alert('로그인 후 이용가능합니다.');
            return;
        }
        
        // 서버로 보낼 데이터
        const saveData = {
            user_id: userId,
            seq_pfjoin_id: seqpfjoinId,
        };

        try {
            const response = await axios.post('http://localhost:9090/detail/save', saveData);
            
            if (response.status === 200) {
                // 서버에서 반환한 메시지를 기반으로 알림 표시
                if (response.data === 'added') {
                    alert('찜하기가 완료되었습니다!');
                } else if (response.data === 'removed') {
                    alert('찜하기가 삭제되었습니다!');
                }
            }
        } catch (error) {
            console.error('찜하기 실패', error);
            alert('찜하기 실패!');
        }
    };

    return (
        <>
            <button 
                className='detailview_save_btn'
                onClick={handleSubmit}
            >
                💙찜하기
            </button>
        </>
    );
}
