export default function Seat() {

    const seatId = [
        seqPfjoinId=1,
        selectDate='2024.12.03',
        selectTime='13:00',
    ];

    const [data, setData] = useState('')

   useEffect(() => {
        axios.get(`http://localhost:9090/detail/seat/${seatId}/view`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, []);

    return(
        <>
            <div className='product_step'>
                <div className='product_step_text'>잔여좌석</div>
                <div className='product_title'>수량</div>
            </div>
            <div className='product_seat_remain'>
                <ul className='product_seat_remain_ul'>
                    <li className='product_seat_remain_li'>
                        <span className='product_seat_grade'>잔여좌석</span>
                        <div className='product_seat_counttext'>
                            <span className='product_seat_count'></span>
                            <span className='product_Seat_text'>석</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}