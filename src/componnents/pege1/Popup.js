import React, { useState } from 'react';
import './Popup.css'; // ไฟล์ CSS สำหรับการปรับแต่ง

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        address: '',
        weight: '',
        height: '',
        bmi: '',
        tdee: '',
        bmr: '',
    });

    const [errors, setErrors] = useState({});
    
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        closePopup();
    };

    return (
        <div className="popup-page">
            <button onClick={openPopup}>Add Trainee</button>
            {isOpen && (
                <div className="overlay">
                    <div className="popup">
                        <h2>กรอกข้อมูล</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name : </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                                {/* {errors.first_name && <span className="error">{errors.first_name}</span>} */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name : </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone : </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address : </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="course">คอร์ส : </label>
                                <select
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                >
                                    <option value="weight_loss">ลดน้ำหนัก</option>
                                    <option value="muscle_gain">เพิ่มกล้ามเนื้อ</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="weight">น้ำหนัก:</label>
                                <input
                                    type="text"
                                    id="weight"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="height">ส่วนสูง:</label>
                                <input
                                    type="text"
                                    id="height"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bmi">BMI:</label>
                                <input
                                    type="text"
                                    id="bmi"
                                    name="bmi"
                                    value={formData.bmi}
                                    onChange={handleChange}
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tdee">TDEE:</label>
                                <input
                                    type="text"
                                    id="tdee"
                                    name="tdee"
                                    value={formData.tdee}
                                    onChange={handleChange}
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bmr">BMR:</label>
                                <input
                                    type="text"
                                    id="bmr"
                                    name="bmr"
                                    value={formData.bmr}
                                    onChange={handleChange}
                                    disabled
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





export default Popup;
