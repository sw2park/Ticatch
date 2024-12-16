import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cssExpL from '../css/Review_list.module.css';

export default function ExpectationList() {
    const { seqpfjoinId } = useParams(); // 경로에서 공연 시퀀스 아이디값 가져옴
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const [error, setError] = useState(null); // 에러 상태 관리

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // 로딩 상태 시작
                const response = await axios.get(`http://localhost:9090/detail/${seqpfjoinId}/exp`);
                setProductData(response.data);
                setError(null); // 에러 초기화
            } catch (err) {
                setError("기대평 리스트를 불러오는 데 실패했습니다.");
            } finally {
                setLoading(false); // 로딩 상태 종료
            }
        };

        fetchData();
    }, [seqpfjoinId]);

    // 2024-12-09 05:36 이런형식으로 출력
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 1월이 0이므로 +1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    // if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={cssExpL.wrap}>
            <div className={cssExpL.review_list_wrap}>
                <ul className={cssExpL.review_list}>
                    {Array.isArray(productData) ? (
                        productData.length > 0 ? (
                            productData.map((exp, index) => (
                                <li className={cssExpL.review_list_item} key={index}>
                                    <span className={cssExpL.review_item_content}>
                                        {exp.exp_content}
                                    </span>
                                    <div className={cssExpL.review_item_writer_info}>
                                        <span className={cssExpL.review_writer_id}>
                                            {exp.user_id}
                                        </span>
                                        <span className={cssExpL.review_item_create_date}>
                                            {formatDate(exp.exp_date)}
                                        </span>
                                        <span className={cssExpL.review_item_purchaser}>
                                            관람자
                                        </span>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <h4 className={cssExpL.h4}>가장 먼저 기대평을 남겨보세요!</h4>
                        )
                    ) : (
                        <p className={cssExpL.p}>아마도 뭔가 잘못 불러오는 중임</p>
                    )}
                </ul>
            </div>
        </div>
    );
}
