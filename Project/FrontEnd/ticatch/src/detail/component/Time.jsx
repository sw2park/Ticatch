import React, { useState } from 'react';

export default function Time({ time, setSelectTime }) {
    const extractTimes = (timeString) => {
        const match = timeString.match(/\(([^)]+)\)/); // 괄호 안의 값 추출
        if (match) {
            return match[1].split(/\s*,\s*/); // 쉼표(,)와 공백(\s*)을 정규식으로 처리
        }
        return [];
    };

    const times = extractTimes(time);

    const [selectTime, setSelectedTime] = useState(null);

    const handleClick = (data) => {
        setSelectedTime(data);
        // setSelectTime(selectTime);
        setSelectTime(data);
    };

    // console.log('Time time : ' + time)
    // console.log('Time : ' + selectTime);
    // console.log('========================================')

    return (
        <ul className="product_time_choice_ul">
            {times.map((time, index) => (
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
            ))}
        </ul>
    );
}
