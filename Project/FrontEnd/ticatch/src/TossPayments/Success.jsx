import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // 데이터 받기
  const location = useLocation();
  const orderData = location.state;
  // 받은 데이터가 없으면 이거 출력함
  if (!orderData) {
    return <p>전달된 데이터가 없습니다.</p>;
  }

  let tossdata = {
    seqPfjoinIds: orderData.seqPfjoinIds,
    selectedDate: orderData.selectedDate,
    selectedTime: orderData.selectedTime,
    //   seat: orderData.selectedSeatsInfo,
    totalPrice: orderData.totalPrice,
    selectedSeatsInfo: orderData.selectedSeatsInfo,
  };

  return (
    <div className="result wrapper">
      <div className="box_section">
        <h2>결제 성공</h2>
        <p>SeqId: {tossdata.seqPfjoinIds}</p>
        <p>총합: {tossdata.totalPrice}</p>
        <p>마이페이지 - 주문내역에서 조회가능합니다</p>
        {/* <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p> */}
        <button
          onClick={() => {
            navigate("/order"); // 지금은 예매 페이지로 이동함 나중에 바꾸기
          }}
        >
          마이페이지로 이동
        </button>
      </div>
    </div>
  );
}
