function ModifyMemberInfoPage() {
  return (
    <>
      <div className="modify-title">
        <h1>회원 정보 수정 </h1>
      </div>
      <div className="modify-info-list">
        <div className="modify-info-list-leftside">
          <ul>
            <li>아이디</li>
            <li>비밀번호</li>
            <li>이름</li>
            <li>연락처</li>
            <li>이메일</li>
            <li>로그인 정보</li>
            <li>회원가입일</li>
            <li>마지막 정보수정일</li>
          </ul>
        </div>
        <div className="modify-info-list-rightside">
          <ul>
            <li>아이디</li>
            <li>비밀번호</li>
            <li>이름</li>
            <li>연락처</li>
            <li>이메일</li>
            <li>로그인 정보</li>
            <li>회원가입일</li>
            <li>마지막 정보수정일</li>
          </ul>
        </div>
      </div>
      <button>회원정보 수정</button>
    </>
  );
}

export default ModifyMemberInfoPage;
