import { useState } from "react";

import "./MyPage.css";
import Calendar from "./mypage_components/Calendar";
import Topbar from "./mypage_components/TopBar";
import TabList from "./mypage_components/mypage_menu/TabList";

import CancleReservePage from "./mypage_pages/CancleReservePage";
import ConfirmReservePage from "./mypage_pages/ConfirmReservePage";
import DeleteMemberPage from "./mypage_pages/DeleteMemberPage";
import ManageExceptionPage from "./mypage_pages/ManageExceptionPage";
import ManageLikeListPage from "./mypage_pages/ManageLikeListPage";
import ManageReviewPage from "./mypage_pages/ManageReviewPage";
import ModifyMemberInfoPage from "./mypage_pages/ModifyMemberInfoPage";

function MyPage() {
  const [contents, setContents] = useState("ConfirmReservePage");

  function handleSelect(selectedButton) {
    setContents(selectedButton);
  }

  const renderPage = () => {
    switch (contents) {
      case "ConfirmReservePage":
        return <ConfirmReservePage />;
      case "CancleReservePage":
        return <CancleReservePage />;
      case "ManageExceptionPage":
        return <ManageExceptionPage />;
      case "ManageReviewPage":
        return <ManageReviewPage />;
      case "ManageLikeListPage":
        return <ManageLikeListPage />;
      case "ModifyMemberInfoPage":
        return <ModifyMemberInfoPage />;
      case "DeleteMemberPage":
        return <DeleteMemberPage />;
      default:
        return <ConfirmReservePage />;
    }
  };

  return (
    <main className="mypage-body">
      <Topbar />
      <div className="flex-container">
        <div className="left-pannel">
          {/* <MemberInfo /> // 멤버 정보 표시할지 말지 고민 */}
          <Calendar />
          <div className="mypage-menu">
            <div className="mypage-menu-reservation">
              <ul>
                <li className="mypage-menu-title">예매관리</li>
                <TabList
                  onClick={() => {
                    handleSelect("ConfirmReservePage");
                  }}
                >
                  예매 확인
                </TabList>
                <TabList
                  onClick={() => {
                    handleSelect("CancleReservePage");
                  }}
                >
                  예매 취소
                </TabList>
              </ul>
            </div>
            <div className="mypage-menu-activity">
              <ul>
                <li className="mypage-menu-title">활동관리</li>
                <TabList
                  onClick={() => {
                    handleSelect("ManageExceptionPage");
                  }}
                >
                  기대평 관리
                </TabList>
                <TabList
                  onClick={() => {
                    handleSelect("ManageReviewPage");
                  }}
                >
                  후기관리
                </TabList>
                <TabList
                  onClick={() => {
                    handleSelect("ManageLikeListPage");
                  }}
                >
                  찜내역 관리
                </TabList>
              </ul>
            </div>
            <div className="mypage-menu-memberinfo">
              <ul>
                <li className="mypage-menu-title">회원정보관리</li>
                <TabList
                  onClick={() => {
                    handleSelect("ModifyMemberInfoPage");
                  }}
                >
                  회원정보수정
                </TabList>
                <TabList
                  onClick={() => {
                    handleSelect("DeleteMemberPage");
                  }}
                >
                  회원 탈퇴
                </TabList>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-pannel">
          <div className="mypage-contents">{renderPage()}</div>
        </div>
      </div>
    </main>
  );
}

export default MyPage;
