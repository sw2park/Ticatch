import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { CheckoutPage } from "../TossPayments/Checkout";

const FinishOrder = () => {
  const location = useLocation();
  const reservationData = location.state;

  if (!reservationData) {
    return <p>전달된 데이터가 없습니다.</p>;
  }

  // 페이지 로드될때 토스페이 API 에 필요한 데이터 및 백에 넘길 데이터 (등급은 못봄)
  useEffect(() => {
    let tossdata = {
      seqPfjoinIds: reservationData.seqPfjoinIds,
      selectedDate: reservationData.selectedDate,
      selectedTime: reservationData.selectedTime,
      //   seat: reservationData.selectedSeatsInfo,
      totalPrice: reservationData.totalPrice,
      selectedSeatsInfo: reservationData.selectedSeatsInfo,
    };
    try {
      axios.post("/api/order/pay", tossdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // 성공 시 리다이렉트
      // 여기서 부터 해야됨 내 생각엔 DB 또 만들어서 해당 값들을 저장해야될듯
      //   window.location.href = response.kakaodata.next_redirect_pc_url; // 이거 이해 안됨
      console.log("결제 준비 성공: ", tossdata);
    } catch (error) {
      console.error("결제 준비 실패:", error);
    }
  });

  return (
    <div>
      {/* 토스페이 테스트중 */}
      <CheckoutPage />

      {/* <h1>Finish Order</h1>
      <p>id : {reservationData.seqPfjoinIds}</p>
      <p>선택된 날짜: {reservationData.selectedDate}</p>
      <p>
        선택된 좌석:{" "}
        {reservationData.selectedSeatsInfo.map((seat) => seat.seat).join(", ")}
      </p>
      <p>총 가격: {reservationData.totalPrice.toLocaleString()}원</p>
      <p>상세 좌석 정보:</p>
      <ul>
        {reservationData.selectedSeatsInfo.map((seat, index) => (
          <li key={index}>
            좌석: {seat.seat}, 등급: {seat.grade}, 가격:{" "}
            {seat.price.toLocaleString()}원
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default FinishOrder;
