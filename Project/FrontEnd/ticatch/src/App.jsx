import {useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Footer from './component/footer/Footer.jsx'
import Header from './component/header/Header.jsx';
import Banner from './component/Main/bannerSlider.jsx';
import MainSlide from './component/Main/MainSlide.jsx';
import MainSlide2 from './component/Main/MainSlide2.jsx';



function App() {
  const [data, setData] = useState('')

   useEffect(() => {
       axios.get("/api/hello")
       .then(res => setData(res.data))
       .catch(err => console.log(err))
   }, []);

   return (
       <div>
           <Header></Header>
           <Banner></Banner>
           <MainSlide></MainSlide>
           <MainSlide2></MainSlide2>
           <Footer></Footer>
       </div>
   );
}

export default App;
