import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppHeader from "../AppHeader";

function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get the token and userId from localStorage
    const token = localStorage.getItem('token');
  
    // Set up the Axios request with the token in the headers
    axios({
      method: 'get',
      url: 'http://localhost:3244/api/trainers', // เรียกใช้งาน API ของคุณ
      headers: {
        'Authorization': `Bearer ${token}`,
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
    console.log(`Edit trainer with ID: ${id}`);
    // Implement the edit functionality here
  };

  const handleDelete = (id) => {
    console.log(`Delete trainer with ID: ${id}`);
    // Implement the delete functionality here
  };

  const handleView = (id) => {
    console.log(`View details of trainer with ID: ${id}`);
    // Implement the view functionality here
  };

  return (
    <>
      <AppHeader />
      <nav>
      </nav>
      <p className="title">My Trainer</p>
  
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
              <tr key={item.trainer_id}>
                <td>{item.trainer_id}</td>
                <td>{`${item.first_name} ${item.last_name}`}</td>
                <td className="py-3 px-2 border-b text-center space-x-2"> {/* Adjust width and alignment here */}
                  <button 
                    onClick={() => handleEdit(item.trainer_id)} 
                    className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    เป้าหมาย
                  </button>
                  <button 
                    onClick={() => handleDelete(item.trainer_id)} 
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    สถิติ
                  </button>
                  <button 
                    onClick={() => handleView(item.trainer_id)} 
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

export default AdminDashboard;
