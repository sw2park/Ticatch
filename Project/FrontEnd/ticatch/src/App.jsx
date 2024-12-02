import {useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import axios from 'axios';
import Main from './detail/component/Main.jsx';
import Test from './detail/component/Test.jsx';
import MainTest from './detail/component/MainTest.jsx';
import DetailList from './detail/component/DetailList.jsx';
import TestConnection from './detail/component/TestConnection.jsx';

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
      //  <>
      //   <Main />
      //  </>
      <Router> {/* BrowserRouter로 감싸줍니다 */}
       <Routes>
         <Route path="/detail/:seqpfjoinId/view" element={<Main />} />
       </Routes>
     </Router>
      //  <>
      //   <Test />
      //  </>
      // <>
      //   <TestConnection/>
      // </>
    // <Router> {/* BrowserRouter로 감싸줍니다 */}
    //   <Routes>
    //     <Route path="/detail/:seqpfjoinId/view" element={<DetailList />} /> {/* component 대신 element 사용 */}
    //   </Routes>
    // </Router>
    
   );
}


export default App;
