import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./ThisIsMyPage.module.css";

export default function ThisIsMyPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [orderList, setOrderList] = useState([]);

  // state 추가: 입력 필드 관리
  const [seqUserId, setseqUserId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // sesstion 에서 가지고 오기
  const thisIsUserId = sessionStorage.getItem("userId");
  // console.log(thisIsUserId);
  const requestData = {
    userId: sessionStorage.getItem("userId"),
  };

  // userId 로 user 데이터 가지고 오기
  useEffect(() => {
    axios
      .post("/api/order/userInfo", requestData)
      .then((response) => {
        console.log("User Info:", response.data);
        setUserInfo(response.data || []);
        setseqUserId(response.data.seqId);
      })
      .catch((error) => {
        console.error("User info 불러오기 에러:", error);
      });
  }, []);

  // 주문 내역 가지고 오기
  useEffect(() => {
    axios
      .get("/api/order/orders", {
        params: { userId: sessionStorage.getItem("userId") },
      })
      .then((response) => {
        const data = response.data;

        if (typeof data === "string") {
          setOrderList([]); // 빈 배열로 설정
        } else if (Array.isArray(data)) {
          setOrderList(data); // 배열을 상태로 설정
        } else {
          setOrderList([]); // 예상 외의 형식일 경우 빈 배열로 설정
        }
      })
      .catch((error) => {
        console.error("주문내역 불러오기 에러:", error);
        setOrderList([]); // 에러 발생 시 빈 배열로 설정
      });
  }, []);

  // 회원 수정 버튼
  const handleUpdate = () => {
    // email @ 랑 .com 있는지 확인하는 정규표현식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("유효한 이메일을 입력해주세요.");
      return;
    }

    // 비밀번호 확인
    if (password !== confirmPassword) {
      alert("비밀번호를 확인해주세요");
      return;
    }

    // 서버에 데이터를 전송하는 로직
    const updatedUserInfo = {
      seqUserId,
      password,
      name,
      email,
      phone,
    };

    console.log("수정된 정보:", updatedUserInfo);
    axios
      .post("/api/order/updateUserInfo", updatedUserInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log("data that's here:", data);

        if (data === "아이디 중복") {
          alert("중복된 아이디 입니다.");
        } else {
          alert("정보가 수정되었습니다");
        }
      })
      .catch((error) => {
        console.error(
          "Error updating user info:",
          error.response ? error.response.data : error.message
        );
      });

    // 버튼 눌르면 input box 비움
    setPassword("");
    setConfirmPassword("");
    setName("");
    setEmail("");
    setPhone("");
  };

  const saveData = {
    userid: thisIsUserId,
  };

  // 나의 찜 내역 가지고 오기
  useEffect(() => {
    axios
      .post("/api/order/getSaves", saveData)
      .then((response) => {
        console.log("Save Info:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching save info:", error);
      });
  }, []);

  return (
    <div className={style.mypage_container}>
      <header className={style.mypage_header}>
        <div>
          <h2>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/mainPage");
              }}
            >
              <span style={{ color: "black" }}>티</span>
              <span style={{ color: "red" }}>캐치</span>
            </span>
          </h2>
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem("userToken");
            sessionStorage.removeItem("userId");
            setUserId("");
            alert("로그아웃되었습니다.");
          }}
          style={{
            color: "red",
            marginLeft: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          로그아웃
        </button>
      </header>

      <main className={style.mypage_main}>
        <div className={style.mypage_info}>
          <h2>어서오세요, {sessionStorage.getItem("userId")}</h2>
          {userInfo ? (
            <>
              <p>Email: {userInfo.email}</p>
              <p>가입일: {userInfo.createDate}</p>
            </>
          ) : (
            <p>로딩중...</p>
          )}
        </div>

        <div className={style.mypage_sections}>
          <section className={style.mypage_watched}>
            <h3>주문 내역</h3>
            <ul>
              {Array.isArray(orderList) && orderList.length > 0 ? (
                orderList.map((order, index) => (
                  <li key={order.orderId || `${order.seqOrderId}-${index}`}>
                    주문 번호 : {order.seqOrderId}
                    <br />
                    티켓 개수 : {order.totalTicket}
                    <br />
                    공연일 : {order.viewDate}
                    <br />
                    회차 : {order.viewTime}
                    <br />
                    좌석 : {order.seatNum}
                    <br />
                    장소 : {order.place}
                    <br />
                    구매일 : {order.buyDate}
                    <br />
                    가격 : {order.totalSum}원
                    <hr />
                  </li>
                ))
              ) : (
                <li>주문 내역이 없습니다.</li>
              )}
            </ul>
          </section>

          <section className={style.mypage_info}>
            <h3>정보수정</h3>
            <ul>
              <input
                className={style.input}
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className={style.input}
                type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                className={style.input}
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={style.input}
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={style.input}
                type="text"
                placeholder="전화번호"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </ul>
            <button className={style.button} onClick={handleUpdate}>
              수정하기
            </button>
          </section>
          <section className={style.mypage_info}>
            <h3>나의 찜 내역</h3>
            <li>ddd</li>
          </section>
        </div>
        <h2>
          회원 탈퇴는 없다 (모든 테이블에서 찾아서 삭제해야되는데 시간 부족)
        </h2>
        <h2>아이디도 못바꾼다 (걸려있는게 너무 많음)</h2>
        <h2>환불은 내일 시간 있으면 해보고 안되면 없음</h2>
      </main>

      <footer className={style.mypage_footer}>
        <p>&copy; {new Date().getFullYear()} 다나오조. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
