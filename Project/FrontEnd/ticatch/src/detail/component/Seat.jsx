export default function Seat({ productData }) {
    return(
        <>
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
                </ul>
            </div>
        </>
    );
}