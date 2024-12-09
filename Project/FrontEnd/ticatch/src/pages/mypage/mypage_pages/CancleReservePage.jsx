import ConfirmNotice from "../mypage_components/mypage_confirm/ConfirmNotice";
import ConfirmTable from "../mypage_components/mypage_confirm/ConfirmTable";
import SearchWeek from "../mypage_components/mypage_confirm/SearchWeek";
import SelectSection from "../mypage_components/mypage_confirm/SelectSection";
import ConfirmSubTitle from "../mypage_components/mypage_confirm/ConfirmSubTitle";
import ConfirmMenuNoitce from "../mypage_components/mypage_confirm/ConfirmMenuNotice";

import './CancleReservePage.css';

function CancleReservePage() {
  return (
    <div className="confirm-wrapper">
      <div className="confirm-title">
        <h1>예매 취소</h1>
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
      <ConfirmTable />
      <ConfirmNotice />
    </div>
  );
}

export default CancleReservePage;
