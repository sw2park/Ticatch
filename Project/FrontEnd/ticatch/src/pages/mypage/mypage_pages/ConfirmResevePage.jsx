function ConfirmReservePage() {
  return (
    <>
      <div className="confirm-title">
        <h1>예매 확인</h1>
      </div>
      <div className="confirm-subtitle">
        <p>
          <strong>예매번호</strong>를 클릭하면 예매 상세 내용을 확인할 수
          있습니다.
        </p>
      </div>
      <div className="confirm-menu-wrapper">
        <div className="confirm-menu-left">
          <p>기간별 조회</p>
          <div className="confirm-menu-select-button">
            <ul>
              <li>
                <button>15일</button>
              </li>
              <li>
                <button>1개월</button>
              </li>
              <li>
                <button>2개월</button>
              </li>
              <li>
                <button>3개월</button>
              </li>
            </ul>
          </div>
          <div className="confirm-menu-right">
            <p>월 별 조회</p>
            <div className="confirm-menu-search-select">
              <ul>
                <li>
                  <select name="" id="">
                    <option value="">예매일</option>
                    <option value="">관람일</option>
                  </select>
                </li>
                <li>
                  <select name="" id="">
                    <option value="">2024년</option>
                    <option value="">2023년</option>
                    <option value="">2022년</option>
                  </select>
                </li>
                <li>
                  <select name="" id="">
                    <option value="">1월</option>
                    <option value="">2월</option>
                    <option value="">3월</option>
                    <option value="">4월</option>
                    <option value="">5월</option>
                    <option value="">6월</option>
                    <option value="">7월</option>
                    <option value="">8월</option>
                    <option value="">9월</option>
                    <option value="">10월</option>
                    <option value="">11월</option>
                    <option value="">12월</option>
                  </select>
                </li>
                <li>
                  <button>조회</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>예매한 내역이 확인이 안되실 경우 <strong>1:1 상담 문의를 이용해주세요.</strong></p>
        <div className="confirm-table">
            <table className="confirm-table-head">
                <th>예매번호</th>
                <th>티켓명</th>
                <th>관람일시</th>
                <th>매수</th>
                <th>취소가능일</th>
                <th>상태</th>
                <tr>
                    <td>예매번호</td>
                    <td>티켓명</td>
                    <td>관람일시</td>
                    <td>n장</td>
                    <td>2024.11.28</td>
                    <td>예매완료</td>
                </tr>
            </table>
            <div className="confirm-table-paging">
                페이징 버튼 들어갈 자리
            </div>
        </div>
        <div className="confirm-notice">
            <ul>
                <li><strong>티켓취소 안내</strong></li>
                <li>예매한 티켓 전체 취소, 혹은 신용카드 결제 시 부분 취소가 가능합니다. <br /> 단, 일부 상품 및 스마트티켓 발권시 부분 취소가 불가합니다.</li>
                <li>티켓이 배송된 이후에는 인터넷이나 고객센터를 통한 취소가 불가하며, 받으신 티켓을 취소일 전까지 DANAOJO 본사로 반송을 해주셔야 취소 가능합니다. &#40;등기우편을 이용해주세요!&#41;</li>
                <li>예매 당일 자정까지 취소하실 경우는 예매 수수료도 환불되며, 취소 수수료가 부과되지 않습니다. 그 이후에 취소하실 경우는 예매 수수료가 환불되지 않으며, 취소 수수료는 정책에 따라 부과됩니다.</li>
                <li>일부 경기의 경우 상황에 따라 일괄 취소 건이 발생할 수 있으며, 일괄 취소 시에는 취소 수수료가 부과되지 않습니다.</li>
                <li>티켓의 날짜/시간/좌석 등급/좌석 위치 변경은 불가합니다. 자세한 안내가 필요할 경우 고객센터를 이용해주세요.</li>
                <li>구단 홈페이지에서 예매한 내역은 구단 홈페이지에서만 확인이 가능합니다.</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default ConfirmReservePage;
