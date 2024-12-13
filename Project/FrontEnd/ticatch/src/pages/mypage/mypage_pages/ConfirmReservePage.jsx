import { useState, useEffect } from "react";

import ConfirmNotice from "../mypage_components/mypage_confirm/ConfirmNotice";
import SearchWeek from "../mypage_components/mypage_confirm/SearchWeek";
import SelectSection from "../mypage_components/mypage_confirm/SelectSection";
import ConfirmSubTitle from "../mypage_components/mypage_confirm/ConfirmSubTitle";
import ConfirmMenuNoitce from "../mypage_components/mypage_confirm/ConfirmMenuNotice";
import TableRow from "../mypage_components/mypage_confirm/TableRow";
import MypageContextProvider, {
  MypageContext,
} from "../mypageContext/mypageContext";
import { useContext } from "react";

import "./ConfirmReservePage.css";
import axios from "axios";

const BASE_URL = "http://localhost:9090/mypage/";

function ConfirmReservePage() {
  const [listData, setListData] = useState([]);
  const { selectMode } = useContext(MypageContext);
  const { selectMonth } = useContext(MypageContext);
  const { selectYear } = useContext(MypageContext);
  const { searchWeek } = useContext(MypageContext);

  useEffect(() => {
    setTableQuery();
    getTableData();
  }, []);

  async function setTableQuery() {
    await axios
      .post(
        BASE_URL + "searchConfirmQuery",
        {
          searchWeek,
          selectMode,
          selectMonth,
          selectYear,
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((response) => {
        console.log("데이터 통신 성공");
        console.log(searchWeek, selectMode, selectMonth, selectYear);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getTableData() {
    await axios
      .get(BASE_URL + "searchConfirm")
      .then((response) => {
        console.log("데이터 통신 성공");
        console.log(response.data);

        setListData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MypageContextProvider>
      <div className="confirm-wrapper">
        <div className="confirm-title">
          <h1>예매 확인</h1>
        </div>
        <ConfirmSubTitle />
        <div className="confirm-menu-wrapper">
          <div className="confirm-menu-left">
            <SearchWeek />
            <div className="confirm-space"></div>
          </div>
          <div className="confirm-menu-right">
            <SelectSection />
          </div>
        </div>
        <div className="confirm-notice-wrapper">
          <ConfirmMenuNoitce />
        </div>
        <div className="confirm-table">
          <table className="confirm-table-head">
            <th className="confirm-table-num">예매번호</th>
            <th className="confirm-table-name">티켓명</th>
            <th className="confirm-table-day">관람일시</th>
            <th className="confirm-table-count">매수</th>
            <th className="confirm-table-cancel">취소가능일</th>
            <th className="confirm-table-status">상태</th>
            <TableRow listData={listData} />
          </table>
        </div>
        <ConfirmNotice />
      </div>
    </MypageContextProvider>
  );
}

export default ConfirmReservePage;
