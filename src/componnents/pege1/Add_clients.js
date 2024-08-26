import React, { useState } from 'react';
import './Popup.css'; // Your custom CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import axios from 'axios';

const Addclients = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        address: ''
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

    const validateForm = () => {
        const newErrors = {};
        if (!formData.first_name) newErrors.first_name = 'First Name is required';
        if (!formData.last_name) newErrors.last_name = 'Last Name is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.address) newErrors.address = 'Address is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
                const userId = localStorage.getItem('user_id'); // Get the userid from localStorage
    
                // Add userid to the formData
                const updatedFormData = {
                    ...formData,
                    userid: userId, }; // Assuming the token is stored in localStorage
                    console.log(updatedFormData);
                const response = await axios.post(
                    'http://localhost:3244/api/clients',
                    updatedFormData,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // Show success message
                toast.success('Trainee added successfully!');
                console.log(response.data);

                closePopup();
            } catch (error) {
                // Show error message
                toast.error('Failed to add trainee. Please try again.');
                console.error(error);
            }
        }
    };

    

    return (
        <div className="popup-page">
            <button onClick={openPopup} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                Add Trainee
            </button>
            {isOpen && (
                <div className="overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="popup bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-extrabold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
                            กรอกข้อมูล
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <label htmlFor="first_name" className="block text-gray-700 font-medium mb-1">First Name:</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                {errors.first_name && <span className="text-red-500">{errors.first_name}</span>}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="last_name" className="block text-gray-700 font-medium mb-1">Last Name:</label>
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                {errors.last_name && <span className="text-red-500">{errors.last_name}</span>}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone:</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-medium mb-1">Address:</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                {errors.address && <span className="text-red-500">{errors.address}</span>}
                            </div>
                            <div className="form-buttons flex justify-end gap-4">
                                <button type="button" className="cancel bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300" onClick={closePopup}>
                                    ยกเลิก
                                </button>
                                <button type="submit" className="submit bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                                    เสร็จสิ้น
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Addclients;
