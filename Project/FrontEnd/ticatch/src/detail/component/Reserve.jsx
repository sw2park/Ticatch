import Calendar from "./Calendar";

export default function Reserve() {
    return(
        <>
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
        </>
    );
}