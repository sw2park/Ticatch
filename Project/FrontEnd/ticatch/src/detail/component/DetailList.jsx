import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailList = () => {
  const { seqpfjoinId } = useParams(); // URL 파라미터 가져오기
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9090/detail/${seqpfjoinId}/view`);
        const data = await response.json(); // 얘 빼면 데이터 못 받아옴

        if (Array.isArray(data)) {
          setProductData(data); // 배열일 경우 그대로 저장
        } else {
          setProductData([data]); // 객체일 경우 배열로 변환
        }
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [seqpfjoinId]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!productData || productData.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      <h1>상세 정보</h1>
      <ul>
        {productData.map((item, index) => (
          <li key={index}>
            <h2>{item.p_title}</h2>
            <img src={item.p_poster} alt={item.p_title} />
            <p>장소: {item.pd_hall_name}</p>
            <p>가격: {item.pd_seatprice}</p>
            <p>출연진: {item.pd_cast}</p>
            {/* 추가 정보 출력 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailList;
