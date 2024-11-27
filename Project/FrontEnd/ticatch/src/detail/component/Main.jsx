import { useEffect, useState } from 'react';
import '../css/Main.css';
import Calendar from './Calendar.jsx';
import Description from './desc.jsx';
import CancelInfo from './Cancel_info.jsx';
import Review from './Review.jsx';
import Expectation from './Expectation.jsx';
import Location from './Location.jsx';
// poster image 예시
import poster from '../images/pirate_PST_1007.jpg';

export default function DetailMain() {

    const [activeTab, setActiveTab] = useState('상세정보');
    const tabContent = {
        상세정보: <Description/>,
        관람후기: <Review/>,
        기대평: <Expectation/>,
        위치정보: <Location/>,
        예매취소안내: <CancelInfo/>,
    };

    return(
        <div className='wrap'>
            <div className="Detail_wrap">

                <div className="info_wrap">
                    <div className="poster_container">
                        <div className="poster_box">
                            <img className='detailview_poster_img' 
                                // src='https://ticketimage.interpark.com/Play/image/large/24/24014409_p.gif'
                                src={poster}
                                >
                            </img>
                        </div>
                    </div>
                    <div className="simple_info_container">
                        <div className="simple_info_header">
                            <h1 className="perform_title">뮤지컬 해적 : THE LAST VOYAGE</h1>
                        </div>

                        <ul className="simple_info_ul">
                            <li className="simple_info_li">
                                <span className='info_title'>장소</span>
                                <div className='simple_info_desc'>
                                    링크아트센터 벅스홀
                                </div>
                            </li>
                            <li className="simple_info_li">
                                <span className='info_title'>관람시간</span>
                                <div className='simple_info_desc'>
                                    110분
                                </div>
                            </li>
                            <li className="simple_info_li">
                                <span className='info_title'>기간</span>
                                <div className='simple_info_desc'>
                                    2024.11.05 ~ 2025.02.02
                                </div>
                            </li>
                            <li className="simple_info_li">
                                <span className='info_title'>가격</span>
                                <div className='simple_info_desc'>
                                    <li>R석 <span>140,000</span>원</li>
                                    <li>S석 <span>100,000</span>원</li>
                                    <li>A석 <span>70,000</span>원</li>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className='product_wrap'>
                    <div className='product_date_container'>
                        <div className='product_step'>
                            <div className='product_step_text'>STEP1</div>
                            <div className='product_title'>관람일 선택</div>
                        </div>
                        <div className='product_date_choice'>
                            <Calendar />
                        </div>
                    </div>
                    <div className='product_time_container'>
                        <div className='product_step'>
                            <div className='product_step_text'>STEP2</div>
                            <div className='product_title'>회차 선택</div>
                        </div>
                        <div className='product_time_choice'>
                            <ul className='product_time_choice_ul'>
                                <li className='product_time_choice_li'>
                                    <button className='product_time_choice_btn--selected'>
                                        <span className='product_time_choice_span'>14시 00분</span>
                                    </button>
                                    <button className='product_time_choice_btn'>
                                        <span className='product_time_choice_span'>14시 00분</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='product_seat_container'>
                        <div className='product_step'>
                        <div className='product_step_text'>잔여좌석</div>
                        <div className='product_title'>수량</div>
                        </div>
                        <div className='product_seat_remain'>
                            <ul className='product_seat_remain_ul'>
                                <li className='product_seat_remain_li'>
                                    <span className='product_seat_grade'>R석</span>
                                    <div className='product_seat_counttext'>
                                        <span className='product_seat_count'>23</span>
                                        <span className='product_Seat_text'>석</span>
                                    </div>
                                </li>
                                <li className='product_seat_remain_li'>
                                    <span className='product_seat_grade'>S석</span>
                                    <div className='product_seat_counttext'>
                                        <span className='product_seat_count'>7</span>
                                        <span className='product_Seat_text'>석</span>
                                    </div>
                                </li>
                                <li className='product_seat_remain_li'>
                                    <span className='product_seat_grade'>A석</span>
                                    <div className='product_seat_counttext'>
                                        <span className='product_seat_count'>0</span>
                                        <span className='product_Seat_text'>석</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='resevation_wrap'>
                    <button className='reseve_btn'><a className='reservation_link'>예매하기</a></button>
                </div>

                <section className='section_tab_wrap'>
                    <ul className='section_tab_ul'>

                    {Object.keys(tabContent).map((tab) => (
                        <li
                        key={tab}
                        className={`section_tab_li ${activeTab === tab ? 'active' : ''}`} // 활성화된 탭에 스타일 추가
                        >
                        <button className="tab_btn" onClick={() => setActiveTab(tab)}>
                            <span className="tab_title">{tab}</span>
                        </button>
                        </li>
                    ))}
                        {/* 
                        <li className='section_tab_li'>
                            <button className='tab_btn'>
                                <span className='tab_title'>상세정보</span>
                            </button>
                        </li>
                        <li className='section_tab_li'>
                            <button className='tab_btn'>
                                <span className='tab_title'>관람후기</span>
                            </button>
                        </li>
                        <li className='section_tab_li'>
                            <button className='tab_btn'>
                                <span className='tab_title'>기대평</span>
                            </button>
                        </li>
                        <li className='section_tab_li'>
                            <button className='tab_btn'>
                                <span className='tab_title'>위치정보</span>
                            </button>
                        </li>
                        <li className='section_tab_li'>
                            <button className='tab_btn'>
                                <span className='tab_title'>예매취소안내</span>
                            </button>
                        </li>*/}
                    </ul>
                </section>
                <div className='section_content'>
                    {tabContent[activeTab]}
                </div>

            </div>
        </div>
    );
}
