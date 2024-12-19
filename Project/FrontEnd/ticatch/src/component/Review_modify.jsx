import { useState } from "react";
import cssReviewL from '../css/Review_list.module.css';
import axios from "axios";

export default function ReviewModify({ seq_review_id }) {

    const handleDelete = async () => {
        const reviewData = {
            seq_review_id: seq_review_id,
            review_content: reviewContent,
            rating: selectedValue,
          };
          
        try {
            const response = await axios.post(`http://localhost:9090/detail/review/${seq_review_id}/modify`, reviewData);
            setError(null); // 에러 초기화
        } catch (err) {
            console.error(err);
            setError("리뷰 수정 실패");
            alert("리뷰 수정 중 오류가 발생했습니다.");
        } finally {
            alert("리뷰가 수정 되었습니다.");
        }
    };

    return(
        <button 
            className={cssReviewL.review_edit_btn}
            onClick={handleDelete}
        >
            수정
        </button>
    );
}