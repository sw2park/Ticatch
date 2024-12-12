import './ConfirmNotice.css';

function ConfirmNotice() {
  return (
    <div className="confirm-notice">
      <div className="confirm-notice-content">
        <ul>
          <li className="confirm-notice-content-title">티켓취소 안내</li>
          <li className="confirm-notice-contents">
            예매한 티켓 전체 취소, 혹은 신용카드 결제 시 부분 취소가 가능합니다.{" "}
            <br /> 단, 일부 상품 및 스마트티켓 발권시 부분 취소가 불가합니다.
          </li>
          <li className="confirm-notice-contents">
            티켓이 배송된 이후에는 인터넷이나 고객센터를 통한 취소가 불가하며,
            받으신 티켓을 취소일 전까지 DANAOJO 본사로 반송을 해주셔야 취소
            가능합니다. &#40;등기우편을 이용해주세요!&#41;
          </li>
          <li className="confirm-notice-contents">
            예매 당일 자정까지 취소하실 경우는 예매 수수료도 환불되며, 취소
            수수료가 부과되지 않습니다. 그 이후에 취소하실 경우는 예매 수수료가
            환불되지 않으며, 취소 수수료는 정책에 따라 부과됩니다.
          </li>
          <li className="confirm-notice-contents">
            일부 경기의 경우 상황에 따라 일괄 취소 건이 발생할 수 있으며, 일괄
            취소 시에는 취소 수수료가 부과되지 않습니다.
          </li>
          <li className="confirm-notice-contents">
            티켓의 날짜/시간/좌석 등급/좌석 위치 변경은 불가합니다. 자세한
            안내가 필요할 경우 고객센터를 이용해주세요.
          </li>
          <li className="confirm-notice-contents">
            구단 홈페이지에서 예매한 내역은 구단 홈페이지에서만 확인이
            가능합니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConfirmNotice;
