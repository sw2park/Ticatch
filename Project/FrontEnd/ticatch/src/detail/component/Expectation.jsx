import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Review.css'
import ExpectationList from './Expectation_list';

export default function Expectation() {
    const { seqpfjoinId } = useParams();
    const [expContent, setExpContent] = useState('');
    const [commentCount, setCommentCount] = useState(0);
    
    const handleInputChange = (char) => {
        const inputText = char.target.value;
        setExpContent(inputText);
        setCommentCount(inputText.length);
    };

    // 기대평 작성
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // 세션 저장
        sessionStorage.setItem('user_id', 'test2');

        // 사용자의 세션 아이디를 가져오기
        const userId = sessionStorage.getItem('user_id');
        console.log("Review sessionId : " + userId);
        
        if (!userId) {
            alert('로그인 후 작성해주세요.');
            return;
        }
        
        // 서버로 보낼 리뷰 데이터
        const expData = {
            user_id: userId,
            seq_pfjoin_id: seqpfjoinId,
            exp_content: expContent,
            exp_date: new Date(),
        };

        try {
            // 서버로 POST 요청 보내기
            const response = await axios.post('http://localhost:9090/detail/exp/new', expData);
            if (response.status === 200) {
                alert('기대평이 등록되었습니다!');
                setExpContent(''); // 리뷰 내용 초기화
                setCommentCount(0); // 글자수 초기화
            }
        } catch (error) {
            console.error('기대평 등록 실패', error);
            alert('기대평 등록에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return(
        <div className='wrap'>
            <div className='review_wrap'>
                <div className='review_header'>
                    <h2 className='review_header_title'>기대평
                        <span className='review_header_count'>
                            999
                        </span>
                    </h2>
                </div>

                <div className='review_notice'>
                    <spna className='review_notice_text'>
                        게시판 운영규정에 맞지 않는 글은 사전 통보없이 삭제될 수 있습니다.
                    </spna>
                </div>

                <div className='review_comment_wrap'>
                    <div className='comment_container'>
                        <div className='commnet_input_container'>
                            <textarea className='comment_textarea' 
                                      placeholder='기대평을 작성해보세요!'
                                      MaxLength={500}
                                      value={expContent}
                                      onChange={handleInputChange}>
                            </textarea>
                        </div>
                        <div className='comment_submitbtn_container'>
                            <span className='comment_text_count' >
                                <span className='commentCount_span'>
                                    {commentCount}
                                </span>
                                <span className='commentMaxLength_span'>&nbsp;/&nbsp;500</span>
                            </span>
                            <button 
                            className='comment_submit_btn'
                            onClick={handleSubmit}
                            >등록</button>
                        </div>
                    </div>
                </div>
                <div className='review_list_wrap'>
                    <ExpectationList />
                </div>
            </div>
        </div>
    );
}