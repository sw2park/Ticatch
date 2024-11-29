import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailList = ({ seqPfjoinId }) => {
  const [detailData, setDetailData] = useState([]); // 데이터 상태 관리

  useEffect(() => {
    if (seqPfjoinId) {
      axios
        .get(`/detail/${seqPfjoinId}/view`) // 백엔드 API 호출
        .then((response) => {
          console.log("응답 데이터:", response.data); // 서버에서 받은 데이터 확인
          setDetailData(response.data); // 응답 받은 데이터를 상태에 저장
        })
        .catch((err) => console.error("API 호출 오류:", err));
    }
  }, [seqPfjoinId]); // seqPfjoinId가 변경될 때마다 데이터 요청

  return (
    <div>
      <h1>공연 상세 정보</h1>
      {detailData.length > 0 ? (
        // 데이터가 있으면, 해당 데이터를 map()으로 출력
        detailData.map((detail) => (
          <div key={detail.seq_pfjoin_id}>
            <h2>제목: {detail.p_title}</h2>
            <img
              src={detail.p_poster}
              alt="Poster"
              style={{ width: "200px" }}
            />
            <p>시작일: {detail.p_start_date}</p>
            <p>종료일: {detail.p_end_date}</p>
            <p>시간: {detail.pd_time}</p>
          </div>
        ))
      ) : (
        // 데이터가 없거나 로딩 중일 때
        <p>데이터를 불러오는 중이거나 데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default DetailList;
