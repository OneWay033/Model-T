import axios from 'axios';
import './AppHeader.css';
import { useState, useEffect } from 'react';

function AppHeader() {
  // const [dataApi, setDataAPI] = useState([]);

  // const getapi = async () => {
  //   try {
  //     const responseData = await axios.get("http://localhost:3244/api/data");
  //     if(responseData.status===500){
  //       alert(responseData.data)
  //     }else{
  //       setDataAPI(responseData.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     alert('Error fetching data: ' + error.message);
  //   }
  // };

  // // ใช้ useEffect เพื่อเรียก getapi หนึ่งครั้งเมื่อคอมโพเนนต์โหลด
  // useEffect(() => {
  //   getapi();
  // }, []); // [] ทำให้ useEffect ทำงานเพียงครั้งเดียว

  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        Model-T
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/Trend_child" className="hover:text-orange-400 Trend_child">Trend child</a></li>
          <li><a href="#about" className="hover:text-orange-400">Training program</a></li>
          <li><a href="#services" className="hover:text-orange-400">Services</a></li>
          <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
