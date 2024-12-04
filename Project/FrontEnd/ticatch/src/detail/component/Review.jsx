import { useState } from 'react';
import '../css/Review.css'
import ReviewList from './Review_list';


export default function Review() {

    const [commentCount, setCommentCount] = useState(0);
    
    const handleInputChange = (char) => {
        const inputText = char.target.value;
        setCommentCount(inputText.length);
    };

    return(
        <div className='wrap'>
            <div className='review_wrap'>
                <div className='review_header'>
                    <h2 className='review_header_title'>관람후기
                        <span className='review_header_count'>
                            999
                        </span>
                    </h2>
                    <div className='review_header_rate'>
                        <span className='rate_star'>
                            ★★★★☆
                        </span>
                        <div className='review_header_rate_score'>
                            <span className='rate_score_avg'>
                                4.9
                            </span>
                            <spna className='rate_score_max'>&nbsp;/&nbsp;5</spna>
                        </div>
                    </div>
                </div>

                <div className='review_notice'>
                    <spna className='review_notice_text'>
                        게시판 운영규정에 맞지 않는 글은 사전 통보없이 삭제될 수 있습니다.
                    </spna>
                </div>

                <div className='review_comment_wrap'>
                    <div className='comment_container'>
                        <div className='comment_star_rate'>
                            <span className='commnet_star_rate_choice'>
                                ☆☆☆☆☆
                            </span>
                            <span className='comment_rate_text'>별점을 선택해주세요.</span>
                        </div>

                        <div className='commnet_input_container'>
                            <textarea className='comment_textarea' 
                                      placeholder='관람후기를 작성해보세요!'
                                      MaxLength={500}
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
                            <button className='comment_submit_btn'>등록</button>
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