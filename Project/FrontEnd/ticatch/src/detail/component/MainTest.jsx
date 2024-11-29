import React, { useState } from "react";
import DetailList from "./DetailList";

const MainTest = () => {
  const [seqPfjoinId, setSeqPfjoinId] = useState(); // 초기값을 1로 설정 (기본값)

  return (
    <div>
      <h1>공연 선택</h1>
      {/* 버튼으로 seqPfjoinId 변경 */}
      <button onClick={() => setSeqPfjoinId(1)}>공연1</button>
      <button onClick={() => setSeqPfjoinId(2)}>공연2</button>
      <button onClick={() => setSeqPfjoinId(3)}>공연3</button>

      {/* DetailList 컴포넌트에 seqPfjoinId 전달 */}
      <DetailList seqPfjoinId={seqPfjoinId} />
    </div>
  );
};

export default MainTest;
