export default function Time({ productData }) {
    // console.log('Time Product Data:', productData);
    // console.log('Time Is Array:', Array.isArray(productData));
    return(
        <ul className='product_time_choice_ul'>
            <li className='product_time_choice_li'>
                <button className='product_time_choice_btn--selected'>
                    <span className='product_time_choice_span'>12시 00분</span>
                </button>
                <button className='product_time_choice_btn--selected'>
                    <span className='product_time_choice_span'></span>
                </button>
            </li>
        </ul>
    );
}