import "./addMemberForm.css";

export default function AddMemberForm() {
  return (
    <div className="create-user">
      <div className="con">
        <div className="create-form">
          <div className="id">
            <label htmlFor="id">아이디</label>
            <input id="id" type="text" placeholder="아이디를 입력하세요." />
          </div>
          <div className="password">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <div className="pwCheck">
            <label htmlFor="pwCheck">비밀번호 확인</label>
            <input
              id="pwCheck"
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <div className="name">
            <label htmlFor="name">이름</label>
            <input id="name" type="text" placeholder="이름을 입력하세요." />
          </div>
          <div className="phone">
            <label htmlFor="phone">휴대폰</label>
            <input
              id="phone"
              type="text"
              placeholder="휴대폰 번호를 입력하세요."
            />
          </div>
          <div className="create-btn">
            <button>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}
