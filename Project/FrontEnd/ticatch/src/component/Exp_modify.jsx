import cssExp from '../css/Review_list.module.css';

export default function ExpModify({ seq_exp_id, exp_content }) {

    console.log('기대평 아이디 : ' + seq_exp_id);
    console.log('기대평 내용 : ' + exp_content);

    const handleModify = async () => {
        const expData = {
            seq_exp_id: seq_exp_id,
            exp_content: exp_content,
          };
          
        try {
            const response = await axios.post(`http://localhost:9090/detail/exp/${seq_exp_id}/modify`, expData);
            setError(null); // 에러 초기화
        } catch (err) {
            console.error(err);
            setError("기대평 수정 실패");
            alert("기대평 수정 중 오류가 발생했습니다.");
        } finally {
            alert("기대평이 수정 되었습니다.");
        }
    };

    return(
        <button 
            className={cssExp.review_edit_btn}
            onClick={handleModify}
        >
            수정
        </button>
    );
}