import React, { useState, useEffect } from "react";
import "./Popup.css"; 
import axios from "axios";

const Goals = ({ client_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "", // Age added to formData
    gender: "",
    activityLevel: 1.2,
    bmi: "",
    bmr: "",
    tdee: "",
    waist: "",
    chest: "",
    arm: "",
    leg: "",
    goal_type: "", // เป้าหมาย เช่น การลดน้ำหนัก, การเพิ่มมวลกล้ามเนื้อ
    client_id: client_id || "", // Initialize with the passed client_id
  });

  const [clientInfo, setClientInfo] = useState(null); // State to hold clientInfo
  const [errors, setErrors] = useState({});

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    if (client_id) {
      fetchClientInfo(client_id);
    }
  }, [client_id]);

  const fetchClientInfo = async (client_id) => {
    try {
        console.log(client_id);
        
        // Get the token from wherever it's stored, e.g., localStorage, context, etc.
        const token = localStorage.getItem('token'); // หรือจาก context ถ้าคุณเก็บไว้ที่นั่น

        const response = await axios.get(`http://localhost:3244/api/clients-by-client_id?client_id=${client_id}`, {
            headers: {
                'Authorization': `Bearer ${token}` // ส่ง token ไปใน headers
            }
        });

        const data = response.data;
        setClientInfo(data);
        console.log(clientInfo);
        console.log(data.gender);
        setFormData((prevState) => ({
            ...prevState,
            gender: data.gender || prevState.gender,
            age: data.age || prevState.age, // Update age with fetched data
            // เพิ่มฟิลด์อื่นๆ ที่ต้องการ
        }));
    } catch (error) {
        console.error("Error fetching client info:", error);
        // จัดการกับข้อผิดพลาดที่เกิดขึ้น
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedFormData = {
        ...prevState,
        [name]: value,
      };
      calculateMetrics(updatedFormData);
      return updatedFormData;
    });
  };

  const calculateMetrics = (data) => {
    const weight = parseFloat(data.weight);
    const height = parseFloat(data.height) / 100; // convert cm to meters
    const age = parseInt(data.age);

    if (weight && height) {
      // Calculate BMI
      const bmi = (weight / (height * height)).toFixed(2);

      // Calculate BMR
      let bmr;
      if (data.gender === "male") {
        bmr = (
          88.362 +
          13.397 * weight +
          4.799 * (height * 100) -
          5.677 * age
        ).toFixed(2);
      } else {
        bmr = (
          447.593 +
          9.247 * weight +
          3.098 * (height * 100) -
          4.33 * age
        ).toFixed(2);
      }

      // Calculate TDEE
      const tdee = (bmr * data.activityLevel).toFixed(2);

      setFormData((prevState) => ({
        ...prevState,
        bmi,
        bmr,
        tdee,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Optionally handle success response
    } catch (error) {
      console.error("Error:", error);
      // Optionally handle error response
    }
    closePopup();
  };

  return (
    <div className="m-1">
      <button
        className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300"
        onClick={openPopup}
      >
        เป้าหมาย
      </button>
      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <h2>เป้าหมาย</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="client_id">Client ID:</label>
                <input
                  type="text"
                  id="client_id"
                  name="client_id"
                  value={formData.client_id}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="weight">น้ำหนัก (kg):</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="height">ส่วนสูง (cm):</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">อายุ:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">เพศ:</label>
                <input
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="waist">รอบเอว (cm):</label>
                <input
                  type="number"
                  id="waist"
                  name="waist"
                  value={formData.waist}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="chest">รอบอก (cm):</label>
                <input
                  type="number"
                  id="chest"
                  name="chest"
                  value={formData.chest}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="arm">รอบแขน (cm):</label>
                <input
                  type="number"
                  id="arm"
                  name="arm"
                  value={formData.arm}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="leg">รอบขา (cm):</label>
                <input
                  type="number"
                  id="leg"
                  name="leg"
                  value={formData.leg}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="goal_type">ประเภทเป้าหมาย:</label>
                <select
                  id="goal_type"
                  name="goal_type"
                  value={formData.goal_type}
                  onChange={handleChange}
                >
                  <option value="">เลือกประเภทเป้าหมาย</option>
                  <option value="weight_loss">ลดน้ำหนัก</option>
                  <option value="muscle_gain">เพิ่มมวลกล้ามเนื้อ</option>
                  <option value="Tighten_the_part">กระชับส่วน</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bmi">BMI:</label>
                <input
                  type="text"
                  id="bmi"
                  name="bmi"
                  value={formData.bmi}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="bmr">BMR:</label>
                <input
                  type="text"
                  id="bmr"
                  name="bmr"
                  value={formData.bmr}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="tdee">TDEE:</label>
                <input
                  type="text"
                  id="tdee"
                  name="tdee"
                  value={formData.tdee}
                  readOnly
                />
              </div>
              <div className="form-buttons">
                <button type="button" className="cancel" onClick={closePopup}>
                  ยกเลิก
                </button>
                <button type="submit" className="submit">
                  เสร็จสิ้น
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Goals;
