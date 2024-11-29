import {useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Main from './detail/component/Main.jsx';
import Test from './detail/component/Test.jsx';
import MainTest from './detail/component/MainTest.jsx';

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
    //    <>
    //     <Test />
    //    </>
    <>
        <MainTest/>
    </>
   );
}


export default App;
