import "./ModifyMemberInfoPage.css";

function ModifyMemberInfoPage() {
  return (
    <>
      <div className="modify-wrapper">
        <div className="modify-title">
          <h1>회원 정보 수정 </h1>
        </div>
        <div className="modify-info-wrapper">
          <table className="modify-table">
            <tr>
              <th className="modify-table-th">아이디</th>
              <td className="modify-table-td">아이디 들어갈 자리</td>
            </tr>
            <tr>
              <th className="modify-table-th">비밀번호</th>
              <td className="modify-table-td">비밀번호 들어갈 자리</td>
            </tr>
            <tr>
              <th className="modify-table-th">이름</th>
              <td className="modify-table-td">이름 들어갈 자리</td>
            </tr>
            <tr>
              <th className="modify-table-th">이메일</th>
              <td className="modify-table-td">이메일 들어갈 자리</td>
            </tr>
            <tr>
              <th className="modify-table-th">연락처</th>
              <td className="modify-table-td">연락처 들어갈 자리</td>
            </tr>
            <tr>
              <th className="modify-table-th">로그인 정보</th>
              <td className="modify-table-td">로그인 정보들어갈 자리</td>
            </tr>
            <tr>
              <th className="modify-table-th">회원가입일</th>
              <td className="modify-table-td">회원가입일 들어갈 자리</td>
            </tr>
            <tr>
              <th className="modify-table-th">마지막 정보수정일</th>
              <td className="modify-table-td">마지막 정보수정일 들어갈 자리</td>
            </tr>
          </table>
        </div>
        <div className="modify-info-btn-section">
          <button className="modify-info-button">회원정보 수정</button>
        </div>
      </div>
    </>
  );
}

export default ModifyMemberInfoPage;
