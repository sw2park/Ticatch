import '../css/Review_list.css'

export default function ExpectationList() {
    return(
        <div className='wrap'>
            <div className='review_list_wrap'>
                <ul className='review_list'>

                    <li className='review_list_item'>
                        <span className='review_item_content'>
                            재밌을것 같아요
                        </span>
                        <div className='review_item_writer_info'>
                            <span className='review_writer_id'>
                                hyewon123
                            </span>
                            <span className='review_item_create_date'>
                                2024.11.24 17:20
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