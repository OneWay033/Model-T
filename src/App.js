import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trend_child from './componnents/pege1/Trend_child';
import Trainprogram from './componnents/pege2/Trainprogram';
import { LoginForm } from './componnents/LoginFrom/LoginForm';
import Create_training from './componnents/pege2/Create-training';
// import Admin_dashboard from './componnents/admin/Admin-dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/Trend_child' element={<Trend_child />} />
        <Route path='/Create-training' element={<Create_training />} />

        <Route path='/Trainprogram' element={<Trainprogram />} />

        {/* admin */}
        {/* <Route path='/Admin-dashboard' element={<Admin_dashboard />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
