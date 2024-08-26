import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3244/api/login', { username, password });
      if (response.status === 200) {  
        const data = response.data;
        setSuccess('Login successful!');
        const token = data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', data.user_id);
        navigate('/Trend_child');
        alert('Login successful');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div 
      className='min-h-screen flex items-center justify-center' 
      style={{ backgroundImage: 'url(/imags/background.png)', backgroundSize: 'cover' }}
    >
      <form 
        onSubmit={handleSubmit}
        className='bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-md backdrop-blur-md'
      >
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>Login</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder='Username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className='w-full p-3 pl-10 text-sm text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
        </div>

        <div className="relative mb-6">
          <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='w-full p-3 pl-10 text-sm text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
        </div>

        <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
          <label>
            <input type="checkbox" className='mr-2'/>Remember me
          </label>
          <a href="#" className='hover:underline'>Forgot password?</a>
        </div>

        <button 
          type="submit" 
          className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300'
        >
          Login
        </button>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Don't have an account? <a href="#" className='text-blue-500 hover:underline'>Register</a></p>
        </div>
      </form>
    </div>
  );
};

// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// export const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const response = await axios.post('http://localhost:3244/api/login', { username, password });
//       if (response.status === 200) {  
//         const data = response.data;
//         setSuccess('Login successful!');
//         const token = data.token;
//         const role = data.role;

//         // Store token, user_id, and role in localStorage
//         localStorage.setItem('token', token);
//         localStorage.setItem('user_id', data.user_id);
//         localStorage.setItem('role', role);

//         // Redirect based on role
//         if (role === 'admin') {
//           navigate('/Admin-dashboard'); // Redirect to admin page
//         } else {
//           navigate('/Trend_child'); // Redirect to user page
//         }
//         alert('Login successful');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError('Invalid credentials');
//       } else {
//         setError('An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div 
//       className='min-h-screen flex items-center justify-center' 
//       style={{ backgroundImage: 'url(/imags/background.png)', backgroundSize: 'cover' }}
//     >
//       <form 
//         onSubmit={handleSubmit}
//         className='bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-md backdrop-blur-md'
//       >
//         <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>Login</h1>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         {success && <p className="text-green-500 text-center mb-4">{success}</p>}

//         <div className="relative mb-6">
//           <input 
//             type="text" 
//             placeholder='Username' 
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className='w-full p-3 pl-10 text-sm text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//           />
//           <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
//         </div>

//         <div className="relative mb-6">
//           <input 
//             type="password" 
//             placeholder='Password' 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className='w-full p-3 pl-10 text-sm text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//           />
//           <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
//         </div>

//         <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
//           <label>
//             <input type="checkbox" className='mr-2'/>Remember me
//           </label>
//           {/* <a href="#" className='hover:underline'>Forgot password?</a> */}
//         </div>

//         <button 
//           type="submit" 
//           className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300'
//         >
//           Login
//         </button>

//         <div className="text-center mt-6 text-sm text-gray-600">
//           <p>Don't have an account? <a href="#" className='text-blue-500 hover:underline'>Register</a></p>
//         </div>
//       </form>
//     </div>
//   );
// };
