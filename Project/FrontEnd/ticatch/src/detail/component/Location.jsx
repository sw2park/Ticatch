import '../css/Location.css'

export default function Location() {
    return(
        <div className="wrap">
            <div className="location_wrap">
                <div className='location_header'>
                    <h2 className='location_header_title'>공연장 위치 정보</h2>
                </div>
                <div className="location_text_box">
                    <div className="location_text">
                        <span className="location_title">장소</span>
                        <span>링크아트센터 벅스홀</span>
                    </div>
                    <div className="location_text">
                        <span className="location_title">주소</span>
                        <span>서울특별시 종로구 대학로14길 29</span>
                    </div>
                    <div className="location_text">
                        <span className="location_title">대표번호</span>
                        <span>031-1588-7890</span>
                    </div>
                </div>

                <div className='location_map_wrap'>
                    <div className='location_map_box'>
                        map_box
                    </div>
                    <button className='location_search_btn'>빠른 길찾기</button>
                </div>
            </div>
        </div>
    );
}