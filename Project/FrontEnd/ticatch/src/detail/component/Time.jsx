import React, { useState } from 'react';

export default function Time({ time }) {
    const extractTimes = (timeString) => {
        const match = timeString.match(/\(([^)]+)\)/); // 괄호 안의 값을 추출
        if (match) {
            return match[1].split(','); // 쉼표로 구분된 시간 배열 반환
        }
        return [];
    };

    const times = extractTimes(time);

    // 현재 선택된 시간을 관리하는 상태
    const [selectedTime, setSelectedTime] = useState(null);

    const handleClick = (time) => {
        setSelectedTime(time); // 선택된 시간을 업데이트
    };

    return (
        <ul className="product_time_choice_ul">
            {times.map((time, index) => (
                <li className="product_time_choice_li" key={index}>
                    <button
                        className={
                            selectedTime === time
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
