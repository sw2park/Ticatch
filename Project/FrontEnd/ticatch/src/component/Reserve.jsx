import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';
import Seat from './Seat';
import Time from './Time';
import cssReseve from '../css/Main.module.css';

export default function Reserve({ productData }) {
    const [selectDate, setSelectDate] = useState('');
    const [selectTime, setSelectTime] = useState('');

    console.log("===========================");
    console.log("Reserve Date : " + selectDate);
    console.log("Reserve Time : " + selectTime);
    console.log("===========================");

    return (
        <>
            <div className={cssReseve.product_wrap}>
                <div className={cssReseve.product_date_container}>
                    <div className={cssReseve.product_step}>
                        <div className={cssReseve.product_step_text}>STEP1</div>
                        <div className={cssReseve.product_title}>관람일 선택</div>
                    </div>
                    <div className={cssReseve.product_date_choice}>
                        {productData.map((product) => {
                            const startDate = product.p_start_date;
                            const endDate = product.p_end_date;
                            const time = product.pd_time;

                            return (
                                <Calendar
                                    startDate={startDate}
                                    endDate={endDate}
                                    time={time}
                                    setSelectDate={setSelectDate}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={cssReseve.product_time_container}>
                    <div className={cssReseve.product_step}>
                        <div className={cssReseve.product_step_text}>STEP2</div>
                        <div className={cssReseve.product_title}>회차 선택</div>
                    </div>
                    <div className={cssReseve.product_time_choice}>
                        {productData.map((product) => {
                            const time = product.pd_time;

                            return (
                                <Time
                                    time={time}
                                    setSelectTime={setSelectTime}
                                    selectDate={selectDate} // 날짜를 선택했는지 확인하기 위해 날짜값 전달
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={cssReseve.product_seat_container}>
                    {productData.map((product) => {
                        const seqPfjoinId = product.seq_pfjoin_id;

                        return (
                            <Seat
                                seqPfjoinId={seqPfjoinId}
                                selectDate={selectDate}
                                selectTime={selectTime}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={cssReseve.resevation_wrap}>
                <button className={cssReseve.reseve_btn}>
                    <a className={cssReseve.reservation_link}>예매하기</a>
                </button>
            </div>
        </>
    );
}
