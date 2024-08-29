import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppHeader from '../AppHeader';
import './Trend_child.css';
import Addclients from './Add_clients';
import Edit_clients from './Edit_client';
import Goals from './Goals';

export default function Trend_child(props) {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    axios({
      method: 'get',
      url: `http://localhost:3244/api/clients?userid=${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsEditPopupOpen(true); // Open the edit popup
  };

  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false); // Close the edit popup
    setCurrentItem(null); // Clear the current item
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3244/api/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      setData(data.filter((item) => item.client_id !== id));
    } catch (error) {
      console.error('There was an error deleting the client!', error);
    }
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
                <td className="py-3 px-2 border-b text-center space-x-2">
                  <Goals client_id={item.client_id} /> {/* Pass client_id here */}
                  <button
                    onClick={() => handleView(item.client_id)}
                    className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300"
                  >
                    สถิติ
                  </button>
                  <button
                    onClick={() => handleView(item.client_id)}
                    className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300"
                  >
                    โปรแกรมเทรน
                  </button>
                  <button
                    onClick={() => handleDelete(item.client_id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    ลบ
                  </button>
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    แก้ไข
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditPopupOpen && <Edit_clients clientToEdit={currentItem} onClose={handleCloseEditPopup} />}
    </>
  );
}
