import { useState } from "react";
import cssReviewL from '../css/Review_list.module.css';
import axios from "axios";

export default function ReviewDelete({ seq_review_id }) {
    
    const handleDelete = async () => {
        try {
            setLoading(true); // 로딩 상태 시작
            const response = await axios.post(
                `http://localhost:9090/detail/review/${seq_review_id}/delete`
            );
            console.log("삭제 결과:", response.data);
            setError(null); // 에러 초기화
            alert("리뷰가 성공적으로 삭제되었습니다."); // 삭제 성공 알림
        } catch (err) {
            console.error(err);
            setError("리뷰 삭제 실패");
            alert("리뷰 삭제 중 오류가 발생했습니다."); // 삭제 실패 알림
        } finally {
            setLoading(false); // 로딩 상태 종료
        }
    };

    return (
        <button
            className={cssReviewL.review_edit_btn}
            onClick={handleDelete}
        >
            삭제
        </button>
    );
}
