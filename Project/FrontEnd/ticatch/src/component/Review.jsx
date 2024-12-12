import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Review.css';
import ReviewList from './Review_list';
import ReviewNum from './Review_num'; 
import ReviewRate from './Review_Rate';



export default function Review() {

    const { seqpfjoinId } = useParams();
    const [hoverValue, setHoverValue] = useState(0); // 마우스 오버 중인 별점 값
    const [selectedValue, setSelectedValue] = useState(0); // 선택한 별점 값
    const [commentCount, setCommentCount] = useState(0); // 리뷰 글자수 카운트
    const [reviewContent, setReviewContent] = useState(''); // 리뷰 내용

    // 별점 선택
    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setReviewContent(inputText);
        setCommentCount(inputText.length);
    };

    const handleMouseEnter = (value) => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(0); // 마우스를 벗어나면 초기화
    };

    const handleClick = (value) => {
        setSelectedValue(value); // 별점 선택
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <li
                    key={i}
                    className={`comment_star_choice_icon ${i <= (hoverValue || selectedValue) ? 'filled' : ''}`}
                    data-value={i}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(i)}
                >
                    ★
                </li>
            );
        }
        return stars;
    };
    
    // 관람후기 작성
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // 세션 저장
        sessionStorage.setItem('user_id', 'test2');

        // 사용자의 세션 아이디를 가져오기
        const userId = sessionStorage.getItem('user_id');
        //console.log("Review sessionId : " + userId);
        
        if (!userId) {
            alert('로그인 후 작성해주세요.');
            return;
        }
        
        // 서버로 보낼 리뷰 데이터
        const reviewData = {
            user_id: userId,
            seq_pfjoin_id: seqpfjoinId,
            review_content: reviewContent,
            review_date: new Date(),
            rating: selectedValue,
        };

        try {
            // 서버로 POST 요청 보내기
            const response = await axios.post('http://localhost:9090/detail/review/new', reviewData);
            if (response.status === 200) {
                alert('리뷰가 등록되었습니다!');
                setReviewContent(''); // 리뷰 내용 초기화
                setSelectedValue(0); // 별점 초기화
                setCommentCount(0); // 글자수 초기화
            }
        } catch (error) {
            console.error('리뷰 등록 실패', error);
            alert('리뷰 등록에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className='wrap'>
            <div className='review_wrap'>
                <div className='review_header'>
                    <h2 className='review_header_title'>
                        관람후기
                        <span className='review_header_count'>
                            <ReviewNum />
                        </span>
                    </h2>
                    <div className='review_header_rate'>
                        <span className='rate_star'>
                            ★
                        </span>
                        <div className='review_header_rate_score'>
                            <span className='rate_score_avg'>
                                <ReviewRate/>
                            </span>
                            <span className='rate_score_max'>&nbsp;/&nbsp;5.0</span>
                        </div>
                    </div>
                </div>

                <div className='review_notice'>
                    <span className='review_notice_text'>
                        게시판 운영규정에 맞지 않는 글은 사전 통보 없이 삭제될 수 있습니다.
                    </span>
                </div>

                <div className='review_comment_wrap'>
                    <div className='comment_container'>
                        <div className='comment_star_rate'>
                            <span className='commnet_star_rate_choice'>
                                <ul className='commnet_rate_choice'>
                                    {renderStars()}
                                </ul>
                            </span>
                            <span className='comment_rate_text'>
                                {selectedValue ? `${selectedValue}점` : "별점을 선택해주세요."}
                            </span>
                        </div>

                        <div className='commnet_input_container'>
                            <textarea
                                className='comment_textarea'
                                placeholder='관람후기를 작성해보세요!'
                                maxLength={500}
                                value={reviewContent}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='comment_submitbtn_container'>
                            <span className='comment_text_count'>
                                <span className='commentCount_span'>
                                    {commentCount}
                                </span>
                                <span className='commentMaxLength_span'>&nbsp;/&nbsp;500</span>
                            </span>
                            <button
                                className='comment_submit_btn'
                                onClick={handleSubmit}
                            >
                                등록
                            </button>
                        </div>
                    </div>
                </div>

                <div className='review_list_wrap'>
                    <ReviewList />
                </div>
            </div>
        </div>
    );
}
