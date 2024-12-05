import './MemberInfo.css'

function MemberInfo() {
  return (
    <div className="member-info">
      <ul>
        <li>
          <strong>닉네임 : </strong>user name
        </li>
        <li>
          <strong>이메일 : </strong>test@e-mail.com
        </li>
        <li>
          <strong>로그인 : </strong>login_type
        </li>
      </ul>
    </div>
  );
}
export default MemberInfo;
