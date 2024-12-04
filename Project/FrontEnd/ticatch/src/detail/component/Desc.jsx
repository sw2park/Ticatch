import '../css/Desc.css'
import descImage from '../images/pirate_noti_1008_1438.jpg';

export default function Description() {
    return(
        <div className='wrap'>
            <div className='desc_wrap'>
                <div className='desc_text_container'>
                    <span className='desc_text'>
                        공연시간 정보 <br/>
                        2024년 11월 05일(화) ~ 2025년 02월 02일(일), 화, 목, 금 20시 ㅣ 수 16시, 20시 ㅣ 토 15시, 19시 ㅣ 일, 공휴일 14시, 18시 | 월 공연 없음​ <br/>
                        * 12/25(수) 14시, 18시 <br/>
                        * 12/30(월) 20시
                    </span>
                </div>
                <div className='desc_img_container'>
                    <img src={descImage}></img>
                </div>
            </div>
        </div>
    );
}