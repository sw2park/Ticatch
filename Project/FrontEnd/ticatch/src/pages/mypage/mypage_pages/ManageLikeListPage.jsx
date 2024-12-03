import ManageTable from "../mypage_components/mypage_manage/ManageTable";

import "./ManageLikeListPage.css";

function ManageLikeListPage() {
    return (
        <div className="manage-wrapper">
            <div className="manage-title">
                <h1>찜목록 관리</h1>
            </div>
            <div className="manage-subtitle">
                <p>고객님의 찜목록을 확인하실 수 있습니다. <br /> 티캐치 운영정책에 위반되거나, 후기의 성격에 맞지 않는 글은 고객님께 사전 통보 없이 삭제될 수 있습니다.</p>
            </div>
            <ManageTable />
        </div>
    );
}

export default ManageLikeListPage;