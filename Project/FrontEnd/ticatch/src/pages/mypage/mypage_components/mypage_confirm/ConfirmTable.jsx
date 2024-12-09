import './ConfirmTable.css'

function ConfirmTable() {
  return (
    <>
      <div className="confirm-table">
        <table className="confirm-table-head">
          <th className="confirm-table-num">예매번호</th>
          <th className="confirm-table-name">티켓명</th>
          <th className="confirm-table-day">관람일시</th>
          <th className="confirm-table-count">매수</th>
          <th className="confirm-table-cancel">취소가능일</th>
          <th className="confirm-table-status">상태</th>
          <tr className="confirm-table-row">
            <td>예매번호</td>
            <td>티켓명</td>
            <td>관람일시</td>
            <td>n장</td>
            <td>2024.11.28</td>
            <td>예매완료</td>
          </tr>
        </table>
      </div>
      <div className="confirm-table-paging">페이징 버튼 들어갈 자리</div>
    </>
  );
}

export default ConfirmTable;
