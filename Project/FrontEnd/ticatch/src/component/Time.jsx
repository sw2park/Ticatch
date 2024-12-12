import React, { useEffect, useState } from 'react';

export default function Time({ time, setSelectTime, selectDate }) {
    const extractTimes = (timeString) => {
        const match = timeString.match(/\(([^)]+)\)/); // 괄호 안의 값 추출
        if (match) {
            return match[1].split(/\s*,\s*/); // 쉼표(,)와 공백(\s*)을 정규식으로 처리
        }
        return [];
    };

    const times = time ? extractTimes(time) : [];
    const [selectTime, setSelectedTime] = useState(null);

    const handleClick = (data) => {
        setSelectedTime(data);
        setSelectTime(data);
    };

    // 날짜 변경 시 선택된 회차 초기화
    useEffect(() => {
        setSelectedTime(null);
    }, [selectDate]);

    // console.log("Time Date : " +  selectDate);

    return (
        <ul className="product_time_choice_ul">
            {!selectDate ? (
                <li className="product_time_choice_li">
                    <span className="product_time_choice_message">
                        예매 날짜를 선택해주세요
                    </span>
                </li>
            ) : (
                times.map((time, index) => (
                    <li className="product_time_choice_li" key={index}>
                        <button
                            className={
                                selectTime === time
                                    ? "product_time_choice_btn--selected"
                                    : "product_time_choice_btn"
                            }
                            onClick={() => handleClick(time)}
                        >
                            <span className="product_time_choice_span">
                                {time.replace(':', '시 ') + '분'}
                            </span>
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
}
