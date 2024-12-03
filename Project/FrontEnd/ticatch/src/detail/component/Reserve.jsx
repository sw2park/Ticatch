import React from 'react';
import Calendar from './Calendar';
import Seat from './Seat';
import Time from './Time';

export default function Reserve({ productData }) {
    return (
        <>
            <div className='product_wrap'>
                <div className='product_date_container'>
                    <div className='product_step'>
                        <div className='product_step_text'>STEP1</div>
                        <div className='product_title'>관람일 선택</div>
                    </div>
                    <div className='product_date_choice'>
                        {productData.map((product) => {
                            const startDate = product.p_start_date;
                            const endDate = product.p_end_date;
                            const time = product.pd_time;

                            return (
                                <Calendar startDate={startDate} endDate={endDate} time={time} />
                            );
                        })}
                    </div>
                </div>
                <div className='product_time_container'>
                    <div className='product_step'>
                        <div className='product_step_text'>STEP2</div>
                        <div className='product_title'>회차 선택</div>
                    </div>
                    <div className='product_time_choice'>
                    {productData.map((product) => {
                            const time = product.pd_time;

                            return (
                                <Time time={time} />
                            );
                        })}
                    </div>
                </div>
                <div className='product_seat_container'>
                    <Seat/>
                </div>
            </div>

            <div className='resevation_wrap'>
                <button className='reseve_btn'>
                    <a className='reservation_link'>예매하기</a>
                </button>
            </div>
        </>
    );
}
