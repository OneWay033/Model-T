import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppHeader from "../AppHeader";
import "./Trend_child.css";
import Addclients from './Add_clients';

export default function Trend_child(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get the token and userId from localStorage
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');
  
    console.log(userId);
    console.log(token);
  
    // Set up the Axios request with the token in the headers and userId as a query parameter
    axios({
      method: 'get',
      url: `http://localhost:3244/api/clients?userid=${userId}`, // Include userId as a query parameter
      headers: {
        'Authorization': `Bearer ${token}`, // Correct string interpolation
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      // Update the state with the fetched data
      setData(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
    });
  }, []);
  
  
  // Handlers for button actions
  const handleEdit = (id) => {
    console.log(`Edit client with ID: ${id}`);
    // Implement the edit functionality here
  };

  const handleDelete = (id) => {
    console.log(`Delete client with ID: ${id}`);
    // Implement the delete functionality here
  };

  const handleView = (id) => {
    console.log(`View details of client with ID: ${id}`);
    // Implement the view functionality here
  };

  return (
    <>
      <AppHeader />
      <nav>
        <Addclients />
      </nav>
      <p className="title">My Trainee</p>
  
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ชื่อ-นามสกุล</th>
              <th>การจัดการ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.client_id}>
                <td>{item.client_id}</td>
                <td>{`${item.first_name} ${item.last_name}`}</td>
                <td className="py-3 px-2 border-b text-center space-x-2"> {/* Adjust width and alignment here */}
                  <button 
                    onClick={() => handleEdit(item.client_id)} 
                    className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    เป้าหมาย
                  </button>
                  <button 
                    onClick={() => handleDelete(item.client_id)} 
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    สถิติ
                  </button>
                  <button 
                    onClick={() => handleView(item.client_id)} 
                    className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300"
                  >
                    โปรแกรมเทรน
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
