import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// datepicker 한글 설정
import { ko } from "date-fns/esm/locale";
// datepicker 커스터마이징 css 파일
import '../css/Calendar.css';

export default function Calendar() {
    // 선택한 날짜 저장
    const [selectedDate, setSelectedDate] = useState(new Date());  

    // 2024년 12월 31일을 maxDate로 설정. month는 0부터 시작
    const maxSelectableDate = new Date(2024, 11, 31);  

    // 주말 텍스트 색상 설정
    const getDayClassName = (date) => {
        const day = date.getDay();
        if (day === 0) return 'react-datepicker__day--sunday'; // 일요일
        if (day === 6) return 'react-datepicker__day--saturday'; // 토요일
        return '';
      };

    return (
        <DatePicker 
            dateFormat='yyyy.MM.dd' // 사용안함
            minDate={new Date()}  // 오늘 날짜부터 선택 가능
            maxDate={maxSelectableDate}  // 2024년 12월 31일까지 선택 가능
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}  // 날짜 선택 시 selectedDate 업데이트
            inline  // 항상 달력 출력
            locale={ko} // 달력 한글 설정
            dayClassName={getDayClassName} // 날짜별 클래스 동적 적용
            
            // 달력 header 스타일 설정
            renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
            }) => (
                <div className="custom-header">
                <button onClick={decreaseMonth}>&lt;</button>
                <span>{`${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`}</span>
                <button onClick={increaseMonth}>&gt;</button>
                </div>
            )}

        />
    );
}
