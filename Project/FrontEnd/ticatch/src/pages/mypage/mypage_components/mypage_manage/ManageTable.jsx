import './ManageTable.css'

function ManageTable() {
  return (
    <>
      <div className="manage-table">
        <table className="manage-table-head">
          <th className="manage-table-name">상품명</th>
          <th className="manage-table-contents">후기내용</th>
          <th className="manage-table-day">작성일</th>
          <tr className="manage-table-row">
            <td>우와</td>
            <td>너무</td>
            <td>재밌겠다</td>
          </tr>
        </table>
      </div>
      <div className="manage-table-paging">페이징 버튼 들어갈 자리</div>
    </>
  );
}

export default ManageTable;
