import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {

  const [pfJoin, setPfJoin] = useState('')
const seq_pfjoin_id=1;
  useEffect(() => {
    axios.get(`/detail/${seq_pfjoin_id}`)
      .then(res => setPfJoin(res.pfJoin))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
        <h2>title : {pfJoin}</h2>
    </div>
  );
}


export default Test;
