import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cssReviewL from '../css/Review_list.module.css';
import ReviewDelete from './Review_delete';
import ReviewModify from './Review_modify';

export default function ReviewList() {
    const { seqpfjoinId } = useParams();
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editedReview, setEditedReview] = useState({}); // 수정된 리뷰 내용을 저장하는 상태

    sessionStorage.getItem("userId");
    const userId = sessionStorage.getItem("userId");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:9090/detail/${seqpfjoinId}/review`);
                setProductData(response.data);
                setError(null);
            } catch (err) {
                setError("리뷰 리스트를 불러오는 데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [seqpfjoinId]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    const handleReviewEdit = (seq_review_id, newContent) => {
        setEditedReview({
            ...editedReview,
            [seq_review_id]: newContent,
        });
    };

    const handleSaveReview = async (seq_review_id) => {
        try {
            const updatedReview = {
                seq_review_id,
                review_content: editedReview[seq_review_id],
            };
            await axios.post(`http://localhost:9090/detail/review/${seq_review_id}/modify`, updatedReview);
            alert('리뷰가 수정되었습니다!');
        } catch (error) {
            console.error(error);
            alert('수정에 실패했습니다.');
        }
    };

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={cssReviewL.wrap}>
            <div className={cssReviewL.review_list_wrap}>
                <ul className={cssReviewL.review_list}>
                    {Array.isArray(productData) ? (
                        productData.length > 0 ? (
                            productData.map((review, index) => (
                                <li className={cssReviewL.review_list_item} key={index}>
                                    <div className={cssReviewL.review_item_star}>
                                        <span className={cssReviewL.review_item_start_icon}>★</span>{review.rating}.0
                                    </div>
                                    
                                    {/* 리뷰 내용 출력 및 수정 */}
                                    <span className={cssReviewL.review_item_content}>
                                        {review.review_content === editedReview[review.seq_review_id] ? (
                                            <textarea 
                                                className={cssReviewL.review_item_content_edit}
                                                value={editedReview[review.seq_review_id]}
                                                onChange={(e) => handleReviewEdit(review.seq_review_id, e.target.value)}
                                            />
                                        ) : (
                                            review.review_content
                                        )}
                                    </span>
                                    
                                    <div className={cssReviewL.review_item_writer_info}>
                                        <span className={cssReviewL.review_writer_id}>
                                            {review.user_id}
                                        </span>
                                        <span className={cssReviewL.review_item_create_date}>
                                            {formatDate(review.review_date)}
                                        </span>
                                        <span className={cssReviewL.review_item_purchaser}>
                                            관람자
                                        </span>
                                        <div className={cssReviewL.review_btn_wrap}>
                                            {review.user_id === userId && !editedReview[review.seq_review_id] && (
                                                <button
                                                    className={cssReviewL.review_edit_btn}
                                                    onClick={() => handleReviewEdit(review.seq_review_id, review.review_content)}
                                                >
                                                    수정
                                                </button>
                                            )}
                                            {review.user_id === userId && editedReview[review.seq_review_id] && (
                                                <>
                                                    <button
                                                        className={cssReviewL.review_edit_submit_btn}
                                                        onClick={() => handleSaveReview(review.seq_review_id)}
                                                    >
                                                        수정
                                                    </button>
                                                    <button
                                                        className={cssReviewL.review_edit_btn}
                                                        onClick={() => handleSaveReview(review.seq_review_id)}
                                                    >
                                                        수정 취소
                                                    </button>
                                                </>
                                            )}
                                            {review.user_id === userId && (
                                                <ReviewDelete seq_review_id={review.seq_review_id} />
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <h4 className={cssReviewL.h4}>가장 먼저 리뷰를 남겨보세요!</h4>
                        )
                    ) : (
                        <p className={cssReviewL.p}>아마도 뭔가 잘못 불러오는 중임</p>
                    )}
                </ul>
            </div>
        </div>
    );
}
