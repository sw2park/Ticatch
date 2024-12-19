import { useEffect } from "react";
import cssReviewL from '../css/Review_list.module.css';

export default function ReviewModify() {
    // const { seqpfjoinId } = useParams()
    // const [productData, setProductData] = useState(null);
    // const [loading, setLoading] = useState(true); // 로딩 상태 관리
    // const [error, setError] = useState(null); // 에러 상태 관리

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true); // 로딩 상태 시작
    //             const response = await axios.post(`http://localhost:9090/detail/review/${reveiw_seq_id}/modify`);
    //             setProductData(response.data);
    //             setError(null); // 에러 초기화
    //         } catch (err) {
    //             setError("리뷰 리스트를 불러오는 데 실패했습니다.");
    //         } finally {
    //             setLoading(false); // 로딩 상태 종료
    //         }
    //     };

    //     fetchData();
    // }, [productData]);

    return(
        <button className={cssReviewL.review_edit_btn}>
            수정
        </button>
    );
}