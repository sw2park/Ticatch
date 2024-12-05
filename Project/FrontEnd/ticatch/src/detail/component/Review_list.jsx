import '../css/Review_list.css'

export default function ReviewList() {
    return(
        <div className='wrap'>
            <div className='review_list_wrap'>
                <ul className='review_list'>

                    <li className='review_list_item'>
                        <div className='review_item_star'>
                            ★★★★☆
                        </div>
                        <span className='review_item_content'>
                            해적들의 작별에는 해적답게 웃어줘야지 <br/>
                            진짜 해적은 울지않아.. <br/><br/>

                            예 ... 전 짭해적입니다 ㅠㅜㅠ <br/>
                        </span>
                        <div className='review_item_writer_info'>
                            <span className='review_writer_id'>
                                hyewon123
                            </span>
                            <span className='review_item_create_date'>
                                2024.11.24 15:13
                            </span>
                            <span className='review_item_purchaser'>
                                관람자
                            </span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
}