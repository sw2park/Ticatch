import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Footer from './component/footer/Footer.jsx'
import './component/footer/Footer.jsx'
import Header from './component/header/Header.jsx';


function App() {
  const [data, setData] = useState('')

   useEffect(() => {
       axios.get("/api/hello")
       .then(res => setData(res.data))
       .catch(err => console.log(err))
   }, []);

   return (
       <div>
           받아온 값 : {data}
           <Header></Header>
           <Footer></Footer>
       </div>
   );
}

export default App;
