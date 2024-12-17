import { useEffect, useState } from 'react';
import Description from './desc.jsx';
import CancelInfo from './Cancel_info.jsx';
import Review from './Review.jsx';
import Expectation from './Expectation.jsx';
import Location from './Location.jsx';
import Info from './Info.jsx';
import cssMain from '../css/Main.module.css'

export default function DetailMain() {
    
    // useEffect(() => {
    //     // 개발 중 임의로 사용자 아이디 저장
    //     localStorage.setItem("userId", "test1");
    // }, []);

    // const userId = localStorage.getItem("userId");
    //console.log('임시 session값 저장 : ' + userId);

    const [activeTab, setActiveTab] = useState('상세정보');
    const tabContent = {
        상세정보: <Description/>,
        관람후기: <Review/>,
        기대평: <Expectation/>,
        위치정보: <Location/>,
        예매취소안내: <CancelInfo/>,
    };


    return(
        <div className={cssMain.wrap}>
            <div className={cssMain.Detail_wrap}>

                <Info/>

                <section className={cssMain.section}>
                    <ul className={cssMain.section_tab_ul}>

                    {Object.keys(tabContent).map((tab) => (
                        <li
                        key={tab}
                        className={`${cssMain.li} ${activeTab === tab ? 'active' : ''}`} // 활성화된 탭에 스타일 추가
                        >
                        <button className={cssMain.tab_btn} onClick={() => setActiveTab(tab)}>
                            <span className={cssMain.tab_title}>{tab}</span>
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
                <div className={cssMain.section_content}>
                    {tabContent[activeTab]}
                </div>

            </div>
        </div>
    );
}
