import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Review_list.css'

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
    
      // if (loading) return <div>로딩 중...</div>;
      if (error) return <div>{error}</div>;

    return(
        <div className='wrap'>
            <div className='review_list_wrap'>
                <ul className='review_list'>
                    {Array.isArray(productData) ? (
                        productData.length > 0 ? (
                            productData.map((exp, index) => (
                            <li className='review_list_item' key={index}>
                                <span className='review_item_content'>
                                    {exp.exp_content}
                                </span>
                                <div className='review_item_writer_info'>
                                    <span className='review_writer_id'>
                                        {exp.user_id}
                                    </span>
                                    <span className='review_item_create_date'>
                                        {exp.exp_date}
                                    </span>
                                    <span className='review_item_purchaser'>
                                        관람자
                                    </span>
                                </div>
                            </li>
                            ))
                        ) : (
                            <h4>가장 먼저 기대평을 남겨보세요!</h4>
                        )
                    ) : (
                        <p>아마도 뭔가 잘못 불러오는 중임</p>
                    )}
                </ul>
            </div>
        </div>
    );
}