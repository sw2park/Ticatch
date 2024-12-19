import { useState } from 'react';
import axios from 'axios';
import cssReviewL from '../css/Review_list.module.css';

export default function ReviewModify({ seq_review_id, initialReviewContent }) {
    const [isEditing, setIsEditing] = useState(false); // 수정 상태 관리
    const [reviewContent, setReviewContent] = useState(initialReviewContent); // 리뷰 내용 상태 관리
    const [selectedValue, setSelectedValue] = useState(0); // 별점 상태 관리

    const handleEditToggle = () => {
        setIsEditing(!isEditing); // 수정 상태 토글
    };

    const handleContentChange = (e) => {
        setReviewContent(e.target.value); // textarea의 내용 변경
    };

    const handleSave = async () => {
        const updatedReview = {
            seq_review_id,
            review_content: reviewContent,
            rating: selectedValue,
        };

        try {
            await axios.post(`http://localhost:9090/detail/review/${seq_review_id}/modify`, updatedReview);
            setIsEditing(false); // 수정 완료 후 수정 상태 종료
            alert('리뷰가 수정되었습니다!');
        } catch (error) {
            console.error(error);
            alert('수정에 실패했습니다.');
        }
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <textarea
                        className={cssReviewL.review_item_content_edit}
                        value={reviewContent}
                        onChange={handleContentChange}
                    />
                    <button
                        className={cssReviewL.review_edit_btn}
                        onClick={handleSave}
                    >
                        수정 완료
                    </button>
                </div>
            ) : (
                <button
                    className={cssReviewL.review_edit_btn}
                    onClick={handleEditToggle}
                >
                    수정
                </button>
            )}
        </div>
    );
}
