import {useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import axios from 'axios';
import DetailMain from './component/Main';

function App() {
  const [data, setData] = useState('')

   useEffect(() => {
       axios.get("/test")
       .then(res => setData(res.data))
       .catch(err => console.log(err))
   }, []);

   return (
    //    <div>
    //        받아온 값 : {data}
    //    </div>
    //    <>
    //     <Main />
    //    </>
      //  <>
      //   <Test />
      //  </>
      // <>
      //   <TestConnection/>
      // </>
    // <>
    //      <DetailList/>
    // </>
    <Router>
      <Routes>
        <Route path="/detail/:seqpfjoinId/view" element={<DetailMain />} /> {/* component 대신 element 사용 */}
      </Routes>
    </Router>
    
    // <KakaoMap />
   );
}


export default App;
