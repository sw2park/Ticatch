import "./SearchWeek.css";
import { MypageContext } from "../../mypageContext/mypageContext";
import { useContext, useState } from "react";
import SelectBtn from "../SelectBtn";

function SearchWeek() {
  const { handleWeekSelect } = useContext(MypageContext);

  const [isBtnSelect, setIsBtnSelect] = useState(false);
  const btnArr = ['15일', '1개월', '2개월', '3개월'];

  const handleClick = (idx) => {
    const newArr = Array(btnArr.length).fill(false);
    newArr[idx] = true;
    setIsBtnSelect(newArr);
  };

  return (
    <>
      <p>기간별 조회</p>
      <div className="confirm-menu-button-section">
        {btnArr.map((item, index) => {
          return (
            <SelectBtn
              key={index}
              handleClick={handleClick}
              isSelected={isBtnSelect[index]}
              elementidx={index}
            >
              {btnArr[index]}
            </SelectBtn>
          );
        })}
      </div>
    </>
  );
}

export default SearchWeek;
