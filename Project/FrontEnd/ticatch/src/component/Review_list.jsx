import React, { useState } from "react";
import axios from "axios";
import cssReviewL from "../css/Review_list.module.css";

export default function ReviewList({ reviews }) {
  const [editMode, setEditMode] = useState(null); // 수정 중인 리뷰 ID
  const [updatedContent, setUpdatedContent] = useState(""); // 수정된 리뷰 내용
  const [updatedRating, setUpdatedRating] = useState(0); // 수정된 별점

  const handleEditClick = (review) => {
    setEditMode(review.seq_review_id);
    setUpdatedContent(review.review_content);
    setUpdatedRating(review.rating);
  };

  const handleContentChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleRatingClick = (rating) => {
    setUpdatedRating(rating);
  };

  const handleSave = async (seq_review_id) => {
    const updatedReview = {
      seq_review_id,
      review_content: updatedContent,
      rating: updatedRating,
    };

    try {
      await axios.post(`http://localhost:9090/detail/review/${seq_review_id}/modify`, updatedReview);
      alert("리뷰가 수정되었습니다!");
      setEditMode(null); // 수정 모드 종료
    } catch (error) {
      console.error("리뷰 수정 실패:", error);
      alert("수정에 실패했습니다.");
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <li
        key={index}
        className={`${cssReviewL.star_icon} ${index < rating ? cssReviewL.filled : ""}`}
      >
        ★
      </li>
    ));
  };

  const renderEditableStars = () => {
    return [...Array(5)].map((_, index) => (
      <li
        key={index}
        className={`${cssReviewL.star_icon} ${index < updatedRating ? cssReviewL.filled : ""}`}
        onClick={() => handleRatingClick(index + 1)}
      >
        ★
      </li>
    ));
  };

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.seq_review_id} className={cssReviewL.review_item}>
          {editMode === review.seq_review_id ? (
            <>
              <ul className={cssReviewL.star_edit_list}>{renderEditableStars()}</ul>
              <textarea
                value={updatedContent}
                onChange={handleContentChange}
                className={cssReviewL.textarea_edit}
              />
              <button onClick={() => handleSave(review.seq_review_id)}>저장</button>
            </>
          ) : (
            <>
              <ul className={cssReviewL.star_list}>{renderStars(review.rating)}</ul>
              <div>{review.review_content}</div>
              <button onClick={() => handleEditClick(review)}>수정</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
