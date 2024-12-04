import { useEffect, useState } from "react";
import axios from 'axios';

export default function Seat({ seqPfjoinId, selectDate, selectTime }) {
    const [seatData, setSeatData] = useState(null);  // 초기값을 null로 설정
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:9090/detail/seat/${seqPfjoinId}/${selectDate}/${selectTime}/view`);
                setSeatData(response.data);  // seatData에 응답 저장
                setError(null);
            } catch (err) {
                setError("잔여 좌석을 불러오는데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        if (selectDate && selectTime) {
            fetchData();
        }
    }, [selectDate, selectTime, seqPfjoinId]);

    const isDateOrTimeInvalid = !selectDate || !selectTime;

    // seatData가 존재하면 seatData를 출력, 존재하지 않으면 160 출력
    const totalSeats = seatData !== undefined && seatData !== null ? seatData : 160;

    return (
        <>
            <div className='product_step'>
                <div className='product_step_text'>잔여좌석</div>
                <div className='product_title'>수량</div>
            </div>
            <div className='product_seat_remain'>
                <ul className='product_seat_remain_ul'>
                    {isDateOrTimeInvalid || loading ? (
                        <li className='product_seat_remain_li'>
                            <span className='product_seat_grade'>예매하실 날짜와 회차를 선택해주세요</span>
                        </li>
                    ) : (
                        <li className='product_seat_remain_li'>
                            <span className='product_seat_grade'>잔여좌석</span>
                            <div className='product_seat_counttext'>
                                <span className='product_seat_count'>
                                    {totalSeats}
                                </span>
                                <span className='product_Seat_text'>석</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}
